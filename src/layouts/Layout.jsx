import { Outlet } from "react-router-dom"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
            <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
