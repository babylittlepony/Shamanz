import { useDispatch, useSelector } from "react-redux"

import { Error, Loader, SongCard } from "../components"
import { genres } from "../assets/constants"
import { useGetTopChartsQuery } from "../redux/services/shazam"

const Discover = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player) // Global state selector

  const { data, isFetching, error } = useGetTopChartsQuery() // Fetch hook from redux

  if (isFetching) return <Loader title="Loading songs..." />
  if (error) return <Error />

  console.log(data.tracks)
  return (
    // HEADER
    <div className="flex flex-col">
      <div className="mt-4 mb-10 flex w-full flex-col items-center justify-between sm:flex-row">
        <h2 className="text-left text-3xl font-bold text-white">Discover</h2>
        <select
          onChange={() => {}}
          className="mt-5 rounded-lg bg-black p-3 text-sm text-gray-300 outline-none sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {/* TRACKS */}
      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover
