import { useState, useEffect } from "react"
import axios from "axios"
import { UNIFILM_API } from "../../constants/constants"
import ReactPaginate from "react-paginate"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs"

import ItemCard from "../ItemCard"

function TvShows() {
	const [tvShowsData, setTvShowsData] = useState([])
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(0)

	const tvShowsUrl = `${UNIFILM_API}/tv-shows`

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()
		document.title = "Unifilm - TV Shows"
		axios
			.get(`${tvShowsUrl}?page=${page}`, { cancelToken: source.token })
			.then((data) => {
				setTvShowsData(data.data.data.items)
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
	}, [page, tvShowsData])

	const handlePageClick = (event) => {
		setPage(event.selected + 1)
	}

	return (
		<>
			<h2>TV SHOWS</h2>
			<div className="holder-item">
				<ItemCard items={tvShowsData} />
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

export default TvShows
