import React from "react"
import useLocalStorage from "use-local-storage"

import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"

import { Routes, Route } from "react-router-dom"

import Newest from "./components/Newest"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import Series from "./components/Series"
import Cartoons from "./components/Cartoons"
import Watch from "./components/Watch"
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
				<Routes>
					<Route exact path="/" element={<Newest />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/tv" element={<TvShows />} />
					<Route path="/series" element={<Series />} />
					<Route path="/cartoons" element={<Cartoons />} />
					<Route path="/watch/:slug" element={<Watch />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
