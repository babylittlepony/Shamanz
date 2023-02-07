import React from "react"
import { useNavigate } from "react-router-dom"

const ArtistCard = ({ track }) => {
  const navigate = useNavigate()

  return (
    <div
      className="flex w-[250px] animate-slideup cursor-pointer flex-col rounded-lg bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={track?.images?.coverart}
        className="h-56 w-full rounded-lg"
      />
      <p className="mt-4 truncate text-lg font-semibold text-white">
        {track?.subtitle}
      </p>
    </div>
  )
}

export default ArtistCard
