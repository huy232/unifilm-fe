import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"

import ItemCard from "../ItemCard"

function Newest() {
	const [newestData, setNewestData] = useState([])
	const newestUrl = `${UNIFILM_API}/update-film`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(newestUrl, { cancelToken: source.token })
			.then((data) => {
				setNewestData(data.data.data.items)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [])

	return (
		<>
			<h2>PHIM MỚI CẬP NHẬT</h2>
			<div className="holder-item">
				<ItemCard items={newestData} />
			</div>
		</>
	)
}

export default Newest
