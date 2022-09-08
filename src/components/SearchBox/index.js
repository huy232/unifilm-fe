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
					<input
						className="search-input"
						type="text"
						placeholder="Want a specific film?"
						onChange={(event) => setSearchInput(event.target.value)}
						value={searchInput}
					/>
					<button type="submit" className="search-button">
						<BsSearch />
					</button>
				</form>
			</div>
		</>
	)
}

export default SearchBox
