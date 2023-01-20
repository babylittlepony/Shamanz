import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { playPause, setActiveSong } from "../redux/features/playerSlice"
import PlayPause from "./PlayPause"

const SongCard = ({ song, i }) => {
  const activeSong = "Test"

  return (
    <div className="flex w-[250px] animate-slideup cursor-pointer flex-col rounded-lg bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm">
      <div className="group relative h-56 w-full">
        <div
          className={`absolute inset-0 items-center justify-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>
    </div>
  )
}

export default SongCard
