import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"

import ItemCard from "../ItemCard"

function Cartoons() {
	const [cartoonsData, setCartoonsData] = useState([])
	const cartoonsUrl = `${UNIFILM_API}/cartoons`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(cartoonsUrl, { cancelToken: source.token })
			.then((data) => {
				setCartoonsData(data.data.data.items)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [])

	return (
		<>
			<h2>CARTOONS/ANIMES</h2>
			<div className="holder-item">
				<ItemCard items={cartoonsData} />
			</div>
		</>
	)
}

export default Cartoons
