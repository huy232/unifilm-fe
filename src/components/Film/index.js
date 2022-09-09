import FilmInfo from "../FilmInfo"
import GoBack from "../GoBack"

function Film({ data, handleEpisode }) {
	return (
		<>
			{data.iFrameSource === "" ? (
				<FilmInfo data={data} />
			) : (
				<>
					<iframe
						src={data.iFrameSource}
						title={`${data?.filmData?.movie?.name}`}
						style={{ border: "none" }}
						allowFullScreen={true}
					></iframe>
				</>
			)}
			{data?.filmData?.movie?.episode_current === "Tập 0" ? (
				<GoBack />
			) : (
				<ul className="list-episode">
					{data?.filmData?.episodes?.[0].server_data.map((episode) => (
						<li
							className={episode.name === data?.activeEpisode ? "selected" : ""}
							key={episode.name}
						>
							<p
								onClick={() => handleEpisode(episode.link_embed, episode.name)}
							>
								Tập {episode.name}
							</p>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

export default Film
