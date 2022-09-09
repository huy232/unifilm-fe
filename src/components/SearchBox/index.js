import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import "./searchbox.css"
function SearchBox() {
	const navigate = useNavigate()

	const [searchInput, setSearchInput] = useState("")

	const onSubmit = (e) => {
		// PREVENT PAGE REFRESH
		e.preventDefault()
		setSearchInput("")
		navigate(`/search?film=${searchInput}`)
	}

	return (
		<>
			<div className="search-box">
				<form name="search-form" onSubmit={onSubmit} className="search-form">
					<div className="search-wrapper">
						<input
							className="search-input"
							type="text"
							placeholder="Muốn tìm một phim cụ thể?"
							onChange={(event) => setSearchInput(event.target.value)}
							value={searchInput}
							required
						/>
						<button type="submit" className="search-button">
							<BsSearch />
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default SearchBox
