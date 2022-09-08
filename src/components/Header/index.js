import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { RiMovie2Line } from "react-icons/ri"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"
import { BiCameraMovie } from "react-icons/bi"
import { TbMovie } from "react-icons/tb"
import { RiMovieLine } from "react-icons/ri"
import { MdOutlineLocalMovies, MdOutlineDarkMode } from "react-icons/md"
import "./header.css"

function Header({ switchTheme }) {
	const [activeSidebar, setActiveSidebar] = useState(
		localStorage.getItem("active-sidebar") === "true"
	)

	useEffect(() => {
		localStorage.setItem("active-sidebar", activeSidebar)
	}, [activeSidebar])

	const toggleSidebar = () => {
		setActiveSidebar(!activeSidebar)
	}

	return (
		<>
			<div className={activeSidebar ? `left-sidebar active` : `left-sidebar`}>
				<header className="sidebar-heading">
					<Link to="/" reloadDocument>
						<span>
							<RiMovie2Line className="sidebar-heading__logo" />
						</span>
						<h1
							className={
								activeSidebar
									? "sidebar-heading__title"
									: "sidebar-heading__title hiding"
							}
						>
							Unifilm
						</h1>
					</Link>
					{activeSidebar ? (
						<BsArrowLeftShort
							className="sidebar-button"
							onClick={() => toggleSidebar()}
						/>
					) : (
						<BsArrowRightShort
							className="sidebar-button"
							onClick={() => toggleSidebar()}
						/>
					)}
				</header>
				<div className="sidebar-body">
					<ul className="sidebar-category">
						<li className="sidebar-category__item" title="Movies">
							<Link to="/movies" reloadDocument>
								<span>
									<BiCameraMovie />
								</span>
								<h2
									className={activeSidebar ? "navbar-item" : "sub-title-hiding"}
								>
									Movies
								</h2>
							</Link>
						</li>
						<li className="sidebar-category__item" title="TV">
							<Link to="/tv" reloadDocument>
								<span>
									<TbMovie />
								</span>
								<h2
									className={activeSidebar ? "navbar-item" : "sub-title-hiding"}
								>
									TV
								</h2>
							</Link>
						</li>
						<li className="sidebar-category__item" title="Series">
							<Link to="/series" reloadDocument>
								<span>
									<MdOutlineLocalMovies />
								</span>
								<h2
									className={activeSidebar ? "navbar-item" : "sub-title-hiding"}
								>
									Series
								</h2>
							</Link>
						</li>
						<li className="sidebar-category__item" title="Cartoons/Anime">
							<Link to="/cartoons" reloadDocument>
								<span>
									<RiMovieLine />
								</span>
								<h2
									className={activeSidebar ? "navbar-item" : "sub-title-hiding"}
								>
									Cartoons
								</h2>
							</Link>
						</li>
					</ul>
				</div>
				<footer className="sidebar-footer" onClick={switchTheme}>
					<div className="dark-mode-btn">
						<div className="dark-mode-holder">
							<MdOutlineDarkMode className="dark-mode-icon" />
							<p
								className={
									activeSidebar ? "dark-mode-text active" : "dark-mode-text"
								}
							>
								DARK MODE
							</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Header
