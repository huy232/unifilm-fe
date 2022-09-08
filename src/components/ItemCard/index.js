import React from "react"
import { Link } from "react-router-dom"

function ItemCard({ items }) {
	if (typeof items.searchData !== "undefined") {
		items.pageData = items.searchData
	}

	return (
		<>
			{items?.pageData?.map((item, i) => {
				if (item.category[0].slug !== "phim-18") {
					return (
						<div className="item" key={item._id}>
							<Link to={`/watch/${item.slug}`} className="item-wrapper">
								<img
									title={item.name}
									src={`https://ophim.cc/_next/image?url=https%3A%2F%2Fimg.ophim.cc%2Fuploads%2Fmovies%2F${item.thumb_url}&w=192&q=75`}
									alt=""
								/>
								<h3 title={item.name} className="item__tooltip">
									{item.name}
								</h3>
								<p className="item-origin-name" title={item.origin_name}>
									{item.origin_name}
								</p>
							</Link>

							<div className="bottom-item">
								{/* Check for different color that will suit each type, ex: Movies -> red, Cartoon -> green, etc */}
								{item.type === "hoathinh" ? (
									<h4 style={{ background: "rgb(64, 224, 32)" }}>Cartoon</h4>
								) : item.type === "series" ? (
									<h4 style={{ background: "rgb(226, 223, 34)" }}>Series</h4>
								) : item.type === "single" ? (
									<h4 style={{ background: "rgb(247, 107, 107)" }}>Movies</h4>
								) : (
									<h4 style={{ background: "rgb(35, 83, 240)" }}>TV Show</h4>
								)}
								<h4>{item.year}</h4>
							</div>
						</div>
					)
				}
			})}
		</>
	)
}

export default ItemCard
