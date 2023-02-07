import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_SHAZAM_RAPID_API_KEY)
      return headers
    },
  }),
  endpoints: (build) => ({
    getTopCharts: build.query({ query: () => "/charts/track" }),
    getSongDetails: build.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getArtistDetails: build.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
    getTopSongs: build.query({
      query: (artistId) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsByCountry: build.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: build.query({
      query: (searchTerm) =>
        `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetTopSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamApi
