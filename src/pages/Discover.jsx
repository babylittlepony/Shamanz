import { Error, Loader, SongCard } from "../components"
import { genres } from "../assets/constants"
import { useGetTopChartsQuery } from "../redux/services/shazam"

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading songs..." />
  if (error) return <Error />

  return (
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

      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data.tracks.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  )
}

export default Discover
