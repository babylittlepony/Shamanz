import React from "react"
import { useSelector } from "react-redux"

import { Error, Loader, SongCard } from "../components"
import { useGetTopChartsQuery } from "../redux/services/shazam"

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  if (isFetching) return <Loader title="Loading Top Charts" />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-left text-3xl font-bold text-white">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data.map((song, i) => (
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

export default TopCharts
