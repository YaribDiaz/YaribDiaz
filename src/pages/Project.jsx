import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Tooltip, Button } from "@nextui-org/react"
import projects from "../data/projects"
import technologies from "../data/technologies"
import GalleryProject from "../components/GalleryProject"


const Project = () => {

    const [project, setProject] = useState([])

    const [imageIndex, setImageIndex] = useState(0)

    const {
        title,
        subtitle,
        description,
        technologies: projectTechnologies
    } = project
    const params = useParams()

    useEffect(() => {

        const projectFiltered = projects.filter(projectState => (projectState.id === Number(params.id)))
        setProject(projectFiltered[0])

    },[])

    const getImageIndex = (index) => {
        setImageIndex(index)
    }


  return (
    <>
            <div className="lg:mt-10 animate-fade-down animate-once">
                <div className=" flex flex-col lg:flex-row p-2 lg:p-5">
                    <div className="flex flex-col px-4 lg:px-10 items-center lg:bg-inherit rounded-lg ">
                        
                        <div className="w-full  p-3 lg:p-5 border rounded-xl bg-gradient-to-br from-stone-900 to-slate-700">
                            <div className="flex flex-col md:flex-row justify-between">
                                <div>
                                    <p className="text-white font-Inter font-bold text-3xl">{title}</p>
                                    <p className="font-Inter text-lg text-gray-400">{subtitle}</p>
                                </div>
                                <div className="flex gap-2">
                                    
                                    <a href={project.repository} target="_blank" rel="noreferrer">
                                        <Button className="bg-gradient-to-tr from-gray-600 to-gray-200">
                                            
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" 
                                                alt="GitHub Image" 
                                                className="w-6"
                                            />
                                            
                                        </Button>
                                    </a>
                                    {project.site &&
                                        <a href={project.site} target="_blank" rel="noreferrer">
                                            <Button className="bg-gradient-to-tr from-orange-800 to-yellow-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                </svg>
                                            </Button>
                                        </a>
                                    }
                                </div>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-gray-100 font-Quicksand h-36 overflow-y-scroll">{description}</p>
                            </div>
                            <div className="mt-5 flex gap-3">
                            {
                                projectTechnologies?.map(t => (
                                    technologies.map(tec => {
                                    if(t === tec.content){
                                        return (
                                        <Tooltip key={tec.content}  content={tec.content} className="capitalize">
                                        <div
                                            key={tec.content}
                                            className="shadow-md shadow-blue-100/[50%] w-10 h-10 bg-white p-[7px] flex flex-col justify-center items-center rounded-md"
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
                        </div>

                        <div className="w-full  mt-5 p-5 border rounded-xl bg-gradient-to-tl from-stone-900 to-gray-800">
                            <div className=" flex flex-col md:flex-row justify-between">
                                <div>
                                    <p className="text-white font-Inter font-bold text-xl">Descripción</p>
                                    <p className="font-Inter text-sm text-gray-400">Imagen {imageIndex+1}</p>
                                </div>
                            </div>
                            <div className="mt-5 w-full">
                                {project.images && 
                                <>
                                    <p className="text-gray-100 font-Quicksand h-32 overscroll-y-auto overflow-y-scroll">
                                        {project?.images[imageIndex]?.description}
                                    </p>
                                </>
                                }
                            </div>

                        </div>

                    </div>

                    <div className="mt-5 h-min lg:mt-0 flex justify-center lg:w-3/5">
                        <GalleryProject 
                            images = {project.images}
                            getImageIndex = {getImageIndex}
                        />
                    </div>

                    

                </div>
                


            </div>

    </>
  )
}

export default Project
