import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {

    const [isSmall, setIsSmall] = useState(false);
    const [showBar, setShowBar] = useState(false)
    const location = useLocation()

    useEffect(() => {
      //setShowBar(false)
      console.log('cambió path')
      setShowBar(true)
    },[location.pathname]);

    const handleShowBar = () => setShowBar(!showBar)

  return (
    <>
      <div className="md:hidden w-full h-14 flex items-center px-3 justify-end bg-black sticky top-0 z-10">
        {showBar ? 
        <div onClick={handleShowBar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        :
        <div onClick={handleShowBar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        }
      </div>
      <div className={`${showBar ? 'hidden' : 'flex'} flex-col md:flex-row md:items-center fixed md:sticky h-screen md:h-14 w-2/5 md:w-full md:justify-between bg-gradient-to-t from-slate-800/[90%] to-black top-0 z-10 transition-all duration-250`}>
        <div className="mt-5 md:mt-0 md:w-3/5">
          <p className="ml-5 font-Quicksand font-bold text-xl md:text-base text-gray-500">Mi Portafolio</p>
        </div>
        <ul className="mt-10 md:mt-0 flex-col md:flex-row gap-7 md:gap-0 text-lg md:text-base font-Quicksand font-medium md:w-2/5 flex justify-evenly items-center">
          <HashLink to='/#profile' smooth onClick={() => setShowBar(true)} className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">Home</HashLink>
          <HashLink to='/#aboutMe' smooth onClick={() => setShowBar(true)} className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">About me</HashLink>
          <HashLink to='/#skills' smooth onClick={() => setShowBar(true)} className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">Skills</HashLink>
          <HashLink to="/#projects" smooth onClick={() => setShowBar(true)} className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">Projects</HashLink>
        </ul>
      </div>
    </>
  )
}

export default Navbar
