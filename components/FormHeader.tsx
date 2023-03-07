import React, { useState, useEffect } from "react"
import Link from "next/link"
// Import react scroll
import { Link as LinkScroll } from "react-scroll"
import ButtonOutline from "./misc/ButtonOutline"
import Logo from "../public/assets/Logo.svg"

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState("")
  const [scrollActive, setScrollActive] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo className="h-8 w-auto" />
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline href="/">Home</ButtonOutline>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
