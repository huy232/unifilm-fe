import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content" style={{ height: "120vh", width: "100%" }}></div>
			<Footer />
		</div>
	)
}

export default App
