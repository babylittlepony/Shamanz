import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { FiSearch } from "react-icons/fi"

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row items-center justify-start">
        <FiSearch aria-hidden="true" className="ml-4 h-5 w-5" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 border-none bg-transparent p-4 text-base text-white placeholder-gray-500 outline-none"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Searchbar
