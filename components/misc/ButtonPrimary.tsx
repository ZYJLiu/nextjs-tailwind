import Link from "next/link"
import React, { ReactNode } from "react"

interface ButtonPrimaryProps {
  children: ReactNode
  addClass?: string
  href: string
}

const ButtonPrimary = ({ children, addClass, href }: ButtonPrimaryProps) => {
  return (
    <Link href={href}>
      <button
        className={
          "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
          addClass
        }
      >
        {children}
      </button>
    </Link>
  )
}

export default ButtonPrimary
