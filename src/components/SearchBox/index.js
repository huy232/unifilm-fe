import { useState } from "react"
import { useNavigate } from "react-router-dom"
function SearchBox() {
	const navigate = useNavigate()

	const [searchInput, setSearchInput] = useState("")

	const onSubmit = (e) => {
		// PREVENT PAGE REFRESH
		e.preventDefault()
		setSearchInput("")
		navigate(`/search?q=${searchInput}`)
	}

	return (
		<>
			<div className="searchBox">
				<form name="search" onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="Want specific film?"
						onChange={(event) => setSearchInput(event.target.value)}
						value={searchInput}
					/>
				</form>
			</div>
		</>
	)
}

export default SearchBox
