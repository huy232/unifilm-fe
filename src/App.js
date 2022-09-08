import useLocalStorage from "use-local-storage"

import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"

import { Routes, Route } from "react-router-dom"

import Watch from "./components/Watch"
import SearchBox from "./components/SearchBox"
import Search from "./components/Search"

import FilmLayout from "./components/FilmLayout"

function App() {
	const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

	const switchTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
	}
	return (
		<div className="App" data-theme={theme}>
			<Header switchTheme={switchTheme} />
			<div className="content">
				<SearchBox />
				<Routes>
					<Route exact path="/" element={<FilmLayout />} />
					<Route path="/movies" element={<FilmLayout />} />
					<Route path="/tv" element={<FilmLayout />} />
					<Route path="/series" element={<FilmLayout />} />
					<Route path="/cartoons" element={<FilmLayout />} />
					<Route path="/watch/:slug" element={<Watch />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
