import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"

import ItemCard from "../ItemCard"

function Series() {
	const [seriesData, setSeriesData] = useState([])
	const seriesUrl = `${UNIFILM_API}/series`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(seriesUrl, { cancelToken: source.token })
			.then((data) => {
				setSeriesData(data.data.data.items)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [])

	return (
		<>
			<h2>SERIES</h2>
			<div className="holder-item">
				<ItemCard items={seriesData} />
			</div>
		</>
	)
}

export default Series
