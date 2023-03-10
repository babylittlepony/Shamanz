import SongBar from "./SongBar"

const RelatedSongs = (
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId
) => (
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold text-white">Top Songs:</h1>

    <div className="mt-6 flex w-full flex-col">
      {data?.data.map((song, i) => (
        <SongBar
          key={`${song.id}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
)

export default RelatedSongs
