import yaribPerfil from "../assets/yarib-trabajador.jpg"

const Profile = () => {
  return (
    <>
      <div className="py-10 flex  items-center justify-center flex-1 animate-fade-up animate-duration-[1000ms] animate-delay-[300ms]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <div className="animate-rotate-y">
                    <img 
                        src={yaribPerfil} 
                        alt="foto Yarib Díaz"
                        className="w-44 h-46 rounded-full shadow-lg shadow-slate-400" 
                    />
                </div>
                
                <div className="p-3">
                        <div className="border p-3  rounded-md bg-white shadow-md">
                            <p className="font-Quicksand text-lg font-medium break-normal line-clamp-5 flex  md:w-[30rem]">
                                Soy un joven apasionado, dedicado y creativo en lo que hago, contribuyendo al
                                desarrollo de aplicaciones web🌐, buscando aprender día a día para desempeñarme
                                mejor en lo que hago y aportar con mis conocimientos.🧑‍💻✨
                            </p>
                            
                        </div>
                </div> 
            </div>          
      </div>
    </>
  )
}

export default Profile
