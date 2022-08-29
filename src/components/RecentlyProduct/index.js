import { useState, useEffect } from "react"
import axios from "axios"

function RecentlyProduct() {
	const [newestData, setNewestData] = useState([])
	const newestUrl = "https://unifilm-backend.herokuapp.com/api/update-film"

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(newestUrl, { cancelToken: source.token })
			.then((data) => {
				setNewestData(data)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [])

	return (
		<>
			{console.log(newestData)}
			<div className="display">THIS IS RECENTLY PRODUCT PAGE</div>
		</>
	)
}

export default RecentlyProduct
