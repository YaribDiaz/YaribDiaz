
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-gradient-to-t from-slate-800/[90%] to-black h-14 sticky top-0 z-10">
      <div className="w-3/5">
        <p className="ml-5 font-Quicksand font-bold text-gray-600">My Portafolio</p>
      </div>
      <ul className="font-Quicksand font-medium w-2/5 flex flex-row justify-evenly items-center">
        <li className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">Home</li>
        <a href="#aboutMe" className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">About me</a>
        <a href="#skills" className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">Skills</a>
        <a href="#projects" className="text-white cursor-pointer border-b-2 border-white-400/[40%] hover:border-slate-600">Projects</a>
      </ul>
    </div>
  )
}

export default Navbar
