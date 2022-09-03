import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"
import ReactPaginate from "react-paginate"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs"

import ItemCard from "../ItemCard"

function Cartoons() {
	const [cartoonsData, setCartoonsData] = useState([])
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(0)

	const cartoonsUrl = `${UNIFILM_API}/cartoons`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()
		document.title = "Unifilm - Cartoons/Anime"
		axios
			.get(`${cartoonsUrl}?page=${page}`, { cancelToken: source.token })
			.then((data) => {
				setCartoonsData(data.data.data.items)
				setPageCount(
					Math.ceil(
						data.data.data.params.pagination.totalItems /
							data.data.data.params.pagination.totalItemsPerPage
					)
				)
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [page, cartoonsData])

	const handlePageClick = (event) => {
		setPage(event.selected + 1)
	}

	return (
		<>
			<h2>CARTOONS/ANIMES</h2>
			<div className="holder-item">
				<ItemCard items={cartoonsData} />
			</div>
			<div className="pagination">
				<ReactPaginate
					breakLabel="..."
					nextLabel={<BsArrowRightSquare />}
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={pageCount}
					previousLabel={<BsArrowLeftSquare />}
					renderOnZeroPageCount={null}
				/>
			</div>
		</>
	)
}

export default Cartoons
