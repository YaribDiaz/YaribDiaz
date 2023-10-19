import {Tooltip, Button} from "@nextui-org/react";
import technologies from "../data/technologies"

const Techonologies = () => {

  return (
    <div id="skills" className="py-10 bg-gradient-to-b ">
        
        <div className="mt-16 flex flex-col items-center justify-center animate-fade-up animate-duration-[800ms] animate-delay-[150ms]">
            <div className="py-1 px-4 rounded-2xl flex justify-center items-center mb-5 bg-gradient-to-r from-blue-500/[80%] to-blue-500/[60%]">
                <p 
                    className="font-Quicksand font-medium text-xl  uppercase text-white "
                >
                    Habilidades / Skills
                </p>
            </div>
            
            <div className="flex justify-center flex-wrap gap-4 w-full lg:w-3/5 bg-white/[60%] p-5 rounded-3xl ">
            {technologies.map((skill) => {
                return (
                <Tooltip key={skill.content} color={skill.color} content={skill.content} className="capitalize">
                    <Button variant="flat" color={skill.color} className="capitalize">
                        <img 
                            src={skill.img} 
                            alt=""
                            className="w-9" 
                        />
                    </Button>

                </Tooltip>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Techonologies
