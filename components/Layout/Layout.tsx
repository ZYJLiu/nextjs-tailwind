import React, { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  console.log(children)
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
