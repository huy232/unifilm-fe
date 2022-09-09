import "./filminfo.css"
import { CATEGORY_TYPE } from "../../constants"

function FilmInfo({ data }) {
	return (
		<>
			{console.log(data)}
			<div className="film-info">
				<div className="film-info__image">
					<img
						src={`https://ophim.cc/_next/image?url=https%3A%2F%2Fimg.ophim.cc%2Fuploads%2Fmovies%2F${data.filmData.movie.slug}-thumb.jpg&w=192&q=75`}
						alt=""
					/>
				</div>
				<div className="film-info__information">
					<div className="film-info__country">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>QUỐC GIA</h4>
							</div>
						</div>
						<div className="film-info__wrapper-content">
							{data.filmData.movie.country.map((country) => (
								<p key={country.name}>{country.name}</p>
							))}
						</div>
					</div>
					<div className="film-info__quality">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>CHẤT LƯỢNG</h4>
							</div>
						</div>
						<p>{data.filmData.movie.quality}</p>
					</div>
					<div className="film-info__time">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>THỜI LƯỢNG</h4>
							</div>
						</div>
						<p>{data.filmData.movie.time}</p>
					</div>
					<div className="film-info__year">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>NĂM RA MẮT</h4>
							</div>
						</div>
						<p>{data.filmData.movie.year}</p>
					</div>
					<div className="film-info__type">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>ĐỊNH DẠNG</h4>
							</div>
						</div>
						<p>{CATEGORY_TYPE[data.filmData.movie.type]}</p>
					</div>
					<div className="film-info__episode-total">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>TỔNG SỐ TẬP</h4>
							</div>
						</div>
						<p>{data.filmData.movie.episode_total}</p>
					</div>
					<div className="film-info__lang">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>BẢN DỊCH</h4>
							</div>
						</div>
						<p>{data.filmData.movie.lang}</p>
					</div>
					<div className="film-info__category">
						<div className="film-info__wrapper-title">
							<div className="film-info__title">
								<h4>THỂ LOẠI</h4>
							</div>
						</div>
						<div className="film-info__wrapper-content">
							{data.filmData.movie.category.map((category) => (
								<p key={category.name}>{category.name}</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<div
				dangerouslySetInnerHTML={{ __html: data.filmData.movie.content }}
				className="film-info__description"
			/>
		</>
	)
}

export default FilmInfo
