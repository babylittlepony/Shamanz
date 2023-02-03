import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazam"

const SongDetails = () => {
  const { songid } = useParams() // Params route to fetch from API
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player) // Global state selector

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  //   Fetch API from Redux
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid })

  const adamid = songData?.artists[0].adamid

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ adamid })

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="Searching song details" />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">Lyrics</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="my-1 text-base text-gray-400">{line}</p>
            ))
          ) : (
            <p className="my-1 text-base text-gray-400">
              Sorry, no lyrics found
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  )
}

export default SongDetails
