import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { UNIFILM_API, PATHNAME } from "../../constants"
import ReactPaginate from "react-paginate"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import SkeletonLayout from "../SkeletonLayout"
import ItemCard from "../ItemCard"

const FilmLayout = () => {
	let fetchUrl = ""
	const pageRef = useRef()
	const location = useLocation()

	const [data, setData] = useState({
		pageData: [],
		page: 1,
		pageCount: 0,
	})

	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		if (location.pathname === "/") {
			fetchUrl = `${UNIFILM_API}/update-film`
			document.title = "Unifilm - Newest"
		}
		if (location.pathname === "/movies") {
			fetchUrl = `${UNIFILM_API}/movies`
			document.title = "Unifilm - Movies"
		}
		if (location.pathname === "/tv") {
			fetchUrl = `${UNIFILM_API}/tv-shows`
			document.title = "Unifilm - TV Shows"
		}
		if (location.pathname === "/cartoons") {
			fetchUrl = `${UNIFILM_API}/cartoons`
			document.title = "Unifilm - Cartoons/Anime"
		}
		if (location.pathname === "/series") {
			fetchUrl = `${UNIFILM_API}/series`
			document.title = "Unifilm - Series"
		}

		axios
			.get(`${fetchUrl}?page=${data.page}`, { cancelToken: source.token })
			.then((data) => {
				const pageCountTotal = Math.ceil(
					data.data.data.params.pagination.totalItems /
						data.data.data.params.pagination.totalItemsPerPage
				)
				setData((prev) => ({
					...prev,
					pageData: data.data.data.items,
					pageCount: pageCountTotal,
				}))
			})
			.catch((thrown) => {
				if (axios.isCancel(thrown)) return
			})
	}, [data.page, location.pathname])

	const handlePageClick = (event) => {
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
			<h2>{PATHNAME[location.pathname]}</h2>
			{data.pageData.length === 0 ? (
				<SkeletonLayout />
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
							onPageChange={handlePageClick}
							pageRangeDisplayed={2}
							pageCount={data.pageCount}
							previousLabel={<BsArrowLeftSquare />}
							renderOnZeroPageCount={null}
						/>
						<div className="page-count">TỔNG TRANG: {data.pageCount}</div>
						<form onSubmit={(e) => handlePageInput(e)}>
							<input
								type="number"
								min="1"
								max={data.pageCount}
								placeholder="Nhập số trang"
								pattern="[-]?[0-9]*[.,]?[0-9]+"
								inputMode="decimal"
							/>
							<button type="submit">GO</button>
						</form>
					</div>
				</>
			)}
		</>
	)
}

export default FilmLayout
