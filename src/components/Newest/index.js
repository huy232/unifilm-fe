import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"
import ReactPaginate from "react-paginate"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

import ItemCard from "../ItemCard"

function Newest() {
	const [newestData, setNewestData] = useState([])
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(0)

	const newestUrl = `${UNIFILM_API}/update-film`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios
			.get(`${newestUrl}?page=${page}`, { cancelToken: source.token })
			.then((data) => {
				setNewestData(data.data.data.items)
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
	}, [page])

	const handlePageClick = (event) => {
		setPage(event.selected + 1)
	}

	return (
		<>
			<h2>NEWEST</h2>
			<div className="holder-item">
				<ItemCard items={newestData} />
			</div>
			<div className="pagination">
				<ReactPaginate
					breakLabel="..."
					nextLabel={<GrFormNext />}
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={pageCount}
					previousLabel={<GrFormPrevious />}
					renderOnZeroPageCount={null}
				/>
			</div>
		</>
	)
}

export default Newest
