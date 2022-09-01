import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"

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
				{newestData.map((item, i) => {
					return (
						<div className="item" key={i}>
							<img
								src={`https://ophim.cc/_next/image?url=https%3A%2F%2Fimg.ophim.cc%2Fuploads%2Fmovies%2F${item.thumb_url}&w=192&q=75`}
								alt=""
							/>
							<h3>{item.name}</h3>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Newest
