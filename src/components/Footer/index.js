import React from "react"
import { AiFillFacebook } from "react-icons/ai"
import { FaGithubSquare } from "react-icons/fa"
import { BsArrowUpSquare } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./footer.css"

function Footer() {
	const handleGoUp = () => {
		window.scrollTo(0, 0)
	}

	return (
		<>
			<footer className="footer">
				<div className="footer__section">
					<ul className="footer__list">
						<a href="https://www.facebook.com/giahuythai/">
							<li>
								<AiFillFacebook />
							</li>
						</a>
						<a href="https://github.com/huy232">
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
