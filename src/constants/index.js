const UNIFILM_API = "https://unifilm-backend.herokuapp.com/api"
const FILM_API = "https://ophim1.com/phim"
const SEARCH_API = "https://unifilm-backend.herokuapp.com/api/search"

const PATHNAME = {
	"/": "MỚI NHẤT",
	"/movies": "PHIM LẺ",
	"/tv": "TRUYỀN HÌNH",
	"/cartoons": "HOẠT HÌNH - ANIME",
	"/series": "PHIM BỘ",
}

const CATEGORY_TYPE = {
	hoathinh: "Hoạt Hình - Anime",
	series: "Phim Bộ",
	tvshows: "Truyền Hình",
	single: "Phim Lẻ",
}

module.exports = {
	UNIFILM_API,
	FILM_API,
	SEARCH_API,
	PATHNAME,
	CATEGORY_TYPE,
}
