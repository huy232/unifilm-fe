import { useNavigate } from "react-router-dom"
import "./goback.css"

function GoBack() {
	const navigate = useNavigate()

	return (
		<>
			<p className="not-update">PHIM ĐANG CẬP NHẬT, HIỆN CHƯA CÓ</p>
			<div className="button-holder">
				<button className="not-update-button" onClick={() => navigate(-1)}>
					QUAY LẠI
				</button>
			</div>
		</>
	)
}

export default GoBack
