import React from "react"
import { Link } from "react-router-dom"

const SongBar = ({ song, i, artistId }) => (
  <div
    className="mb-2 flex w-full  flex-row items-center rounded-lg
     bg-transparent bg-[#5d5577] p-4 py-2"
  >
    <h3 className="mr-3 text-base font-bold text-white">{i + 1}.</h3>
    <div className="flex flex-1 flex-row items-center ">
      <img
        className="h-20 w-20 rounded-lg"
        src={
          artistId
            ? song?.attributes?.artwork?.url
                .replace("{w}", "125")
                .replace("{h}", "125")
            : song?.images?.coverart
        }
        alt={song?.title}
      />
      <p className="pl-2 text-xl font-bold text-white">
        {song?.attributes?.name}
      </p>
    </div>
  </div>
)

export default SongBar
