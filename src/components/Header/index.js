import React from "react"
import { RiMovie2Line } from "react-icons/ri"
import {
	BsArrowRightShort,
	BsSearch,
	BsFillMoonFill,
	BsFillSunFill,
} from "react-icons/bs"
import { BiCameraMovie } from "react-icons/bi"
import { TbMovie } from "react-icons/tb"
import "./header.css"

function Header() {
	const body = document.querySelector("body"),
		sidebar = body.querySelector(".sidebar")

	const changeTheme = () => {
		body.classList.toggle("darkmode")
	}

	const closeSidebar = () => {
		body.querySelector(".sidebar").classList.toggle("close")
	}

	return (
		<>
			<nav className="sidebar">
				<header>
					<div className="image-text">
						<span className="image">
							<RiMovie2Line className="image-logo" />
						</span>

						<div className="text header-text">
							<div className="name">Unifilm</div>
							<span className="profession">Movie/TV site</span>
						</div>
					</div>
					<BsArrowRightShort
						className="toggle"
						onClick={() => closeSidebar()}
					/>
				</header>

				<div className="menu-bar">
					<div className="menu">
						<li className="search-box">
							<BsSearch className="icon" />
							<input
								type="search"
								placeholder="Search..."
								className="search-input text"
							/>
						</li>
						<ul className="menu-links">
							<li className="nav-link">
								<a href="#">
									<BiCameraMovie className="icon" />
									<span className="text nav-text">Movies</span>
								</a>
							</li>
							<li className="nav-link">
								<a href="#">
									<TbMovie className="icon" />
									<span className="text nav-text">TV Shows</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="bottom-content">
						<li className="mode">
							<div className="toggle-switch" onClick={() => changeTheme()}>
								<span className="switch"></span>
							</div>
							<span className="mode-text text">Dark mode</span>
						</li>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header
