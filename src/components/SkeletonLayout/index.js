/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./skeleton.css"

function SkeletonLayout() {
	return (
		<>
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<div className="holder-item">
					{[0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => (
						<div className="item" key={i} style={{ padding: "0 20px" }}>
							<a className="item-wrapper">
								<Skeleton className="skeleton-image" />
								<Skeleton count={2} className="skeleton-line" />
							</a>
							<div className="bottom-item">
								<Skeleton count={1} className="skeleton-line" />
							</div>
						</div>
					))}
				</div>
			</SkeletonTheme>
		</>
	)
}

export default SkeletonLayout
