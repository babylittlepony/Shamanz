import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import {
  useGetArtistDetailsQuery,
  useGetTopSongsQuery,
} from "../redux/services/shazam"

const ArtistDetails = () => {
  const { id: artistId } = useParams() // Params route to fetch from API
  const { activeSong, isPlaying } = useSelector((state) => state.player) // Global state selector

  //   Fetch API from Redux
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId)
  const { data: topSongs, isFetching: isFetchingTopSongs } =
    useGetTopSongsQuery(artistId)

  if (isFetchingArtistDetails) return <Loader title="Loading Artist details" />
  if (isFetchingTopSongs) return <Loader title="Loading top songs" />
  if (error) return <Error />

  console.log("Artist data", artistData)
  console.log("TOPSONGS", topSongs)

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData.data[0]} />
      <RelatedSongs
        data={topSongs.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails
