import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"

import ItemCard from "../ItemCard"

function TvShows() {
	const [tvShowsData, setTvShowsData] = useState([])
	const tvShowsUrl = `${UNIFILM_API}/tv-shows`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(tvShowsUrl, { cancelToken: source.token })
			.then((data) => {
				setTvShowsData(data.data.data.items)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [])

	return (
		<>
			<h2>TV SHOWS</h2>
			<div className="holder-item">
				<ItemCard items={tvShowsData} />
			</div>
		</>
	)
}

export default TvShows
