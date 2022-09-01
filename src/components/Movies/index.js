import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"

import ItemCard from "../ItemCard"

function Movies() {
	const [moviesData, setMoviesData] = useState([])
	const moviesUrl = `${UNIFILM_API}/movies`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(moviesUrl, { cancelToken: source.token })
			.then((data) => {
				setMoviesData(data.data.data.items)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [])

	return (
		<>
			<h2>MOVIES</h2>
			<div className="holder-item">
				<ItemCard items={moviesData} />
			</div>
		</>
	)
}

export default Movies
