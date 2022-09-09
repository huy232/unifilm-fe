import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FILM_API } from "../../constants/"
import { TailSpin } from "react-loading-icons"
import Film from "../Film"
import GoBack from "../GoBack"

import "./watch.css"

function Watch() {
	const [data, setData] = useState({
		filmData: [],
		iFrameSource: "",
		activeEpisode: "",
		setDone: false,
	})
	const { slug } = useParams()

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(`${FILM_API}/${slug}`, { cancelToken: source.token })
			.then((data) => {
				document.title = `Unifilm - ${data.data.movie.name}`
				setData((prev) => ({ ...prev, filmData: data.data, setDone: true }))
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
				<h2>{data?.filmData?.movie?.name}</h2>
				<h3>{data?.filmData?.movie?.origin_name}</h3>
			</div>
			{!data.setDone ? (
				<TailSpin
					stroke="#6934bf"
					fill="#6934bf"
					speed="0.75"
					className="film-loading"
				/>
			) : data?.filmData?.movie?.status === "trailer" ? (
				<GoBack />
			) : (
				<>
					<Film data={data} handleEpisode={handleEpisode} />
				</>
			)}
		</>
	)
}

export default Watch
