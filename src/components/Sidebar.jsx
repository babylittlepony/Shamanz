import { useState } from "react"
import { NavLink } from "react-router-dom"
import { RiCloseLine } from "react-icons/ri"
import { HiOutlineMenu } from "react-icons/hi"

import { logo } from "../assets"
import { links } from "../assets/constants"

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const NavLinks = ({ handleClick }) => (
    <>
      <div className="mt-10 ">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className="my-8 flex flex-row items-center justify-start text-sm font-medium text-gray-400 hover:text-cyan-400"
            onClick={() => handleClick && handleClick()}
          >
            <link.icon className="mr-2 h-6 w-6" />
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  )

  return (
    <>
      <div className="hidden w-[240px] flex-col items-center bg-[#191624] py-10 px-4 md:flex">
        <img src={logo} alt="logo" className="h-16 w-16" />
        <p className="bg-gradient-to-l from-yellow-300 to-amber-800 bg-clip-text font-display text-xl font-bold tracking-widest text-transparent">
          SHAMANZ
        </p>
        <NavLinks />
      </div>

      {/* Mobile Menu Handler */}
      <div className="absolute top-6 right-3 block md:hidden">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="mr-2 h-6 w-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="mr-2 h-6 w-6 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`smooth-transition absolute top-0 z-10 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] p-6 backdrop-blur-lg md:hidden ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <p className="bg-gradient-to-l from-yellow-500 to-gray-300 bg-clip-text font-display text-xl font-bold tracking-widest text-transparent">
          SHAMANZ
        </p>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar
