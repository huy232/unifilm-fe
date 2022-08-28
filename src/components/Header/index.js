import { useState } from "react"
import { Link } from "react-router-dom"
import { RiMovie2Line } from "react-icons/ri"
import { BsArrowRightShort, BsArrowLeftShort, BsStar } from "react-icons/bs"
import { BiCameraMovie } from "react-icons/bi"
import { TbMovie } from "react-icons/tb"
import { RiMovieLine } from "react-icons/ri"
import { MdOutlineLocalMovies } from "react-icons/md"
import "./header.css"

function Header() {
	const [activeSidebar, setActiveSidebar] = useState(true)

	const toggleSidebar = () => {
		setActiveSidebar(!activeSidebar)
	}

	return (
		<>
			<div className={activeSidebar ? `left-sidebar active` : `left-sidebar`}>
				<header className="sidebar-heading">
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
						<li className="sidebar-category__item">
							<Link to="/movies">
								<span>
									<BiCameraMovie />
								</span>
								<h2 className={activeSidebar ? "" : "sub-title-hiding"}>
									Movies
								</h2>
							</Link>
						</li>
						<li className="sidebar-category__item">
							<Link to="/tv">
								<span>
									<TbMovie />
								</span>
								<h2 className={activeSidebar ? "" : "sub-title-hiding"}>TV</h2>
							</Link>
						</li>
						<li className="sidebar-category__item">
							<Link to="/series">
								<span>
									<MdOutlineLocalMovies />
								</span>
								<h2 className={activeSidebar ? "" : "sub-title-hiding"}>
									Series
								</h2>
							</Link>
						</li>
						<li className="sidebar-category__item">
							<Link to="/cartoons">
								<span>
									<RiMovieLine />
								</span>
								<h2 className={activeSidebar ? "" : "sub-title-hiding"}>
									Cartoons
								</h2>
							</Link>
						</li>
					</ul>
				</div>
				<footer className="sidebar-footer"></footer>
			</div>
		</>
	)
}

export default Header
