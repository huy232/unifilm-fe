import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { FILM_API } from "../../constants/"

import "./watch.css"

function Watch() {
	const [data, setData] = useState({
		filmData: [],
		iFrameSource: "",
		activeEpisode: "",
	})

	const navigate = useNavigate()
	const { slug } = useParams()

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(`${FILM_API}/${slug}`, { cancelToken: source.token })
			.then((data) => {
				document.title = `Unifilm - ${data.data.movie.name}`
				setData((prev) => ({ ...prev, filmData: data.data }))
			})
	}, [slug, data.iFrameSource])

	const handleEpisode = (iFrameSource, episodeName) => {
		console.log(iFrameSource)
		setData((prev) => ({
			...prev,
			activeEpisode: episodeName,
			iFrameSource: iFrameSource,
		}))
	}

	return (
		<>
			<div className="film-content">
				<h1>{data?.filmData?.movie?.name}</h1>
			</div>
			{data?.filmData?.movie?.status == "trailer" ? (
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
						src={data.iFrameSource}
						title={`${data?.filmData?.movie?.name}`}
						style={{ border: "none" }}
						allowFullScreen={true}
					></iframe>
					<ul className="list-episode">
						{data?.filmData?.episodes?.[0].server_data.map((episode, i) => (
							<li
								className={
									episode.name == data?.activeEpisode ? "selected" : ""
								}
								key={episode.name}
							>
								<p
									onClick={() =>
										handleEpisode(episode.link_embed, episode.name)
									}
								>
									Episode {i}
								</p>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	)
}

export default Watch
