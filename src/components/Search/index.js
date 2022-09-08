import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs"
import { SEARCH_API } from "../../constants"
import ItemCard from "../ItemCard"
import { TailSpin } from "react-loading-icons"
import "./search.css"

function Search() {
	const pageRef = useRef()
	const [searchParams] = useSearchParams()
	const querySearch = searchParams.get("film")

	const [data, setData] = useState({
		searchData: [],
		pageCount: 0,
		page: 1,
		doneState: false,
	})
	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()
		document.title = "Unifilm - Search"
		axios
			.get(`${SEARCH_API}?film=${querySearch}&page=${data.page}`, {
				cancelToken: source.token,
			})
			.then((data) => {
				const pageCountTotal = Math.ceil(
					data.data.data.params.pagination.totalItems /
						data.data.data.params.pagination.totalItemsPerPage
				)
				setData((prev) => ({
					...prev,
					searchData: data.data.data.items,
					pageCount: pageCountTotal,
					doneState: true,
				}))
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [data.page, querySearch])

	const handlePageClick = (event) => {
		console.log(event)
		setData((prev) => ({ ...prev, page: event.selected + 1 }))
	}

	const handlePageInput = (event) => {
		event.preventDefault()
		// SET PAGE REF TO CURRENT SELECTED INPUT
		pageRef.current.state.selected = event.target[0].value - 1
		// SET PAGE TO ACTUAL PAGE TO FETCH DATA
		setData((prev) => ({ ...prev, page: event.target[0].value }))
	}

	return (
		<>
			{!data.doneState ? (
				<div className="holder-item">
					<TailSpin stroke="#6934bf" fill="#6934bf" speed="0.75" />
				</div>
			) : (
				<>
					{data.searchData.length === 0 ? (
						<p className="text-result">Found none for your search result</p>
					) : (
						<>
							<div className="holder-item">
								<ItemCard items={data} />
							</div>

							<div className="pagination">
								<ReactPaginate
									ref={pageRef}
									breakLabel="..."
									nextLabel={<BsArrowRightSquare />}
									onPageChange={(e) => handlePageClick(e)}
									pageRangeDisplayed={2}
									pageCount={data.pageCount}
									previousLabel={<BsArrowLeftSquare />}
									renderOnZeroPageCount={null}
								/>
								<form onSubmit={(e) => handlePageInput(e)}>
									<input
										type="number"
										min="1"
										max={data.pageCount}
										placeholder="Enter page number"
										pattern="[-]?[0-9]*[.,]?[0-9]+"
										inputMode="decimal"
									/>
									<button type="submit">GO</button>
								</form>
							</div>
						</>
					)}
				</>
			)}
		</>
	)
}

export default Search
