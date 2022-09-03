import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FILM_API } from "../../constants/constants"

import "./watch.css"

function Watch() {
	const [filmData, setFilmData] = useState([])
	const [iframeSource, setiFrameSource] = useState("")
	const [activeEpisode, setActiveEpisode] = useState()

	const { slug } = useParams()

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(`${FILM_API}/${slug}`, { cancelToken: source.token })
			.then((data) => setFilmData(data.data))
	}, [filmData, iframeSource])

	const handleEpisode = (iFrameSource, episodeName) => {
		setActiveEpisode(episodeName)
		setiFrameSource(iFrameSource)
	}
	return (
		<>
			<iframe
				src={iframeSource}
				title={`${filmData?.movie?.name}`}
				style={{ border: "none" }}
				allowFullScreen="true"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
			></iframe>
			<ul className="list-episode">
				{filmData?.episodes?.[0].server_data.map((episode) => (
					<li
						className={episode.name == activeEpisode ? "active" : ""}
						key={episode.name}
						onClick={() => handleEpisode(episode.link_embed, episode.name)}
					>
						<p>{episode.filename}</p>
					</li>
				))}
			</ul>
		</>
	)
}

export default Watch
