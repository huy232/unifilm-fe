import React from "react"

function ItemCard({ items }) {
	return (
		<>
			{console.log(items)}
			{items.map((item, i) => {
				return (
					<div className="item" key={i}>
						<img
							title={item.name}
							src={`https://ophim.cc/_next/image?url=https%3A%2F%2Fimg.ophim.cc%2Fuploads%2Fmovies%2F${item.thumb_url}&w=192&q=75`}
							alt=""
						/>
						<h3 title={item.name} className="item__tooltip">
							{item.name}
						</h3>
						<h4>
							{item.type == "hoathinh"
								? "Cartoon"
								: item.type == "series"
								? "Series"
								: item.type == "single"
								? "Movie"
								: "TV Show"}
						</h4>
					</div>
				)
			})}
		</>
	)
}

export default ItemCard
