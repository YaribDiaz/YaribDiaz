import { Tooltip } from "@nextui-org/react"
import projects from "../data/projects"
import technologies from "../data/technologies"
import { Link } from "react-router-dom"

const Projects = () => {






  return (
    <main id="projects" className=" flex flex-col justify-center items-center bg-gradient-to-b from-black via-slate-800 to-slate-400">
      <div className="mt-24 py-1 px-4 rounded-2xl flex justify-center items-center mb-5 bg-gradient-to-r from-gray-100/[30%] to-slate-200/[20%]">
                <p 
                    className=" font-Quicksand font-medium text-xl uppercase text-white "
                >
                    Proyectos / Projects
                </p> 
            </div>
      <div className="mt-10 grid items-start justify-items-center grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 p-3"> 
        {
            projects.map(project => (
                <Link 
                    to={`/${project.title.toLocaleLowerCase()}/${project.id}`}
                    key={project.title}
                    className="flex flex-col items-center justify-center w-10/12 px-2 py-1 border bg-white rounded-xl shadow-md  cursor-pointer hover:scale-105 text-gray-500 hover:text-black transition-all duration-300"
                >
                    <div className="w-full px-8 pb-4">
                      <p className="font-Quicksand text-xl font-bold text-gray-800">
                          {project.title} 
                      </p>
                      <p className="text-left font-Inter text-gray-500 text-sm">
                          {project.subtitle} 
                      </p>
                    </div>
                    <img 
                        src={`./${project.cover}.png`} 
                        alt={`Imagen de proyecto ${project.title}`}
                        width={500}
                        height={350} 
                        className="h-max rounded-2xl shadow-md"
                    />
                    <div className="p-5 font-Rajdhani font-bold">
                        <p className="hyphens-auto line-clamp-3 break-normal">
                           {project.description}
                        </p>
                    </div>
                    <div className="grid justify-items-center grid-flow-row grid-cols-7 lg:grid-cols-9 gap-2 mb-2">
                    {
                       project.technologies.map(t => (
                        technologies.map(tec => {
                          if(t === tec.content){
                            return (
                              <Tooltip key={tec.content}  content={tec.content} className="capitalize">
                              <div
                                key={tec.content}
                                className=" w-10 lg:w-12 h-10 lg:h-12 bg-gray-200 p-[7px] flex flex-col justify-center items-center rounded-md"
                              >

                                <img 
                                  src={tec.img}
                                  alt=""
                                  width={27}
                                  height={27} 
                                  className="w-max h-min"
                                />
                                
                              </div>
                              </Tooltip>
                            )
                          }
                         
                        })
                      ))
                    }     
                    </div>
                </Link>
            ))
        }
      </div>
    </main>
  )
}

export default Projects
