import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { FILM_API } from "../../constants/constants"

import "./watch.css"

function Watch() {
	const [filmData, setFilmData] = useState([])
	const [iframeSource, setiFrameSource] = useState("")
	const [activeEpisode, setActiveEpisode] = useState()

	const navigate = useNavigate()
	const { slug } = useParams()

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(`${FILM_API}/${slug}`, { cancelToken: source.token })
			.then((data) => {
				document.title = `Unifilm - ${data.data.movie.name}`
				setFilmData(data.data)
			})
	}, [filmData, iframeSource, slug])

	const handleEpisode = (iFrameSource, episodeName) => {
		setActiveEpisode(episodeName)
		setiFrameSource(iFrameSource)
	}

	return (
		<>
			<div className="film-content">
				<h1>{filmData?.movie?.name}</h1>
			</div>
			{filmData?.movie?.status == "trailer" ? (
				<>
					<p className="not-update">PHIM ĐANG CẬP NHẬT, HIỆN CHƯA CÓ</p>
					<div className="button-holder">
						<button className="not-update-button" onClick={() => navigate(-1)}>
							QUAY LẠI
						</button>
					</div>
				</>
			) : (
				<>
					<iframe
						src={iframeSource}
						title={`${filmData?.movie?.name}`}
						style={{ border: "none" }}
						allowFullScreen={true}
					></iframe>
					<ul className="list-episode">
						{filmData?.episodes?.[0].server_data.map((episode) => (
							<li
								className={episode.name == activeEpisode ? "selected" : ""}
								key={episode.name}
								onClick={() => handleEpisode(episode.link_embed, episode.name)}
							>
								<p>{episode.filename}</p>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	)
}

export default Watch
