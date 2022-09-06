import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs"
import { SEARCH_API } from "../../constants"

function Search() {
	const [searchData, setSearchData] = useState([])
	const [pageCount, setPageCount] = useState(0)
	const [searchParams] = useSearchParams()
	const querySearch = searchParams.get("q")
	useEffect(() => {
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()
		document.title = "Unifilm - Search"
	})
	return <>THIS IS SEARCH PAGE</>
}

export default Search
