/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { AiFillFacebook } from "react-icons/ai"
import { FaGithubSquare } from "react-icons/fa"
import { BsArrowUpSquare } from "react-icons/bs"
import "./footer.css"

function Footer() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer")
		if (newWindow) newWindow.opener = null
	}

	const handleGoUp = () => {
		window.scrollTo(0, 0)
	}

	return (
		<>
			<footer className="footer">
				<div className="footer__section">
					<ul className="footer__list">
						<a
							onClick={() =>
								openInNewTab("https://www.facebook.com/giahuythai/")
							}
							href=""
						>
							<li>
								<AiFillFacebook />
							</li>
						</a>
						<a onClick={() => openInNewTab("https://github.com/huy232")}>
							<li>
								<FaGithubSquare />
							</li>
						</a>
						<div className="go-up-icon">
							<BsArrowUpSquare title="Want to go up?" onClick={handleGoUp} />
						</div>
					</ul>
				</div>
			</footer>
		</>
	)
}

export default Footer
