import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FreeMode } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import PlayPause from "./PlayPause"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import { useGetTopChartsQuery } from "../redux/services/shazam"

import "swiper/css"
import "swiper/css/free-mode"

const TopChartCard = ({ song, i }) => (
  <div className="mb-2 flex w-full cursor-pointer flex-row items-center rounded-lg p-4 py-2 hover:bg-[#4c426e]">
    {song.title}
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch()
  const { setActiveSong, isPlaying } = useSelector((state) => state.player) // Global state selector
  const { data } = useGetTopChartsQuery() // Fetch hook from redux
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" })
  })

  const topPlays = data?.tracks.slice(0, 5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  console.log("TOP PLAYS:", topPlays)
  return (
    <div
      ref={divRef}
      className="ml-0 mb-6 flex max-w-full flex-1 flex-col xl:ml-6 xl:mb-0 xl:max-w-[500px]"
    >
      {/* TOP CHARTS */}
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top Charts</h2>
          <Link to="/top-charts">
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>

      {/* TOP ARTISTS */}
      <div className="mt-8 flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top Artists</h2>
          <Link to="/top-artists">
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="animate-slideright rounded-full shadow-lg"
            >
              <Link to={`/artists/${artist?.artists?.adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="name"
                  className="w-full rounded-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay
