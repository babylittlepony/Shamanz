import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "b81cfe58fbmshab8fc15c01928e5p12be6cjsn61940ebb1d45"
      )
      return headers
    },
  }),
  endpoints: (build) => ({
    getTopCharts: build.query({ query: () => "/charts/track" }),
  }),
})

export const { useGetTopChartsQuery } = shazamApi
