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
import headerStyle from "./header.module.css"

function Header() {
	const body = document.querySelector("body")

	const changeTheme = () => {
		body.classList.toggle("darkmode")
	}

	return (
		<>
			<nav className={headerStyle[`sidebar`]}>
				<header>
					<div className={headerStyle["image-text"]}>
						<span className={headerStyle["image"]}>
							<RiMovie2Line className={headerStyle["image-logo"]} />
						</span>

						<div className={headerStyle["text header-text"]}>
							<div className={headerStyle["name"]}>Unifilm</div>
							<span className={headerStyle["profession"]}>Movie/TV site</span>
						</div>
					</div>
					<BsArrowRightShort className={headerStyle["toggle"]} />
				</header>

				<div className={headerStyle["menu-bar"]}>
					<div className={headerStyle["menu"]}>
						<li className={headerStyle["search-box"]}>
							<BsSearch className={headerStyle["icon"]} />
							<input
								type="search"
								placeholder="Search..."
								className={headerStyle["search-input"]}
							/>
						</li>
						<ul className={headerStyle["menu-links"]}>
							<li className={headerStyle["nav-link"]}>
								<a href="#">
									<BiCameraMovie className={headerStyle["icon"]} />
									<span className={headerStyle["text nav-text"]}>Movies</span>
								</a>
							</li>
							<li className={headerStyle["nav-link"]}>
								<a href="#">
									<TbMovie className={headerStyle["icon"]} />
									<span className={headerStyle["text nav-text"]}>TV Shows</span>
								</a>
							</li>
						</ul>
					</div>
					<div className={headerStyle["bottom-content"]}>
						<li className={headerStyle["mode"]}>
							<div className={headerStyle["dark-light"]}>
								<BsFillMoonFill className={headerStyle["dark"]} />
								<BsFillSunFill className={headerStyle["light"]} />
							</div>
							<span className={headerStyle["mode-text text"]}>Dark mode</span>
							<div
								className={headerStyle["toggle-switch"]}
								onClick={() => changeTheme()}
							>
								<span className={headerStyle["switch"]}></span>
							</div>
						</li>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header
