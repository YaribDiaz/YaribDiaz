import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
const AboutMe = () => {

  return (
    <div id="aboutMe" className=" flex justify-center p-5 animate-fade-up animate-duration-[1000ms] animate-delay-[300ms]">
        <div className="flex1  flex-col w-full lg:w-2/5">
        <Tabs  variant="solid" color="primary" aria-label="Options" className="flex justify-center font-bold">

            <Tab key="photos" title="Acerca de mí" className="font-Quicksand">
            <Card>
                <CardBody>
                    <p className="border-b uppercase font-Inter font-medium">
                        Fernando Yarib Velázquez Díaz
                    </p>
                    <div className="font-medium font-Inter text-gray-600">
                        <p className="border-b">7721514998</p>
                        <p className="border-b">yaribdiazz@gmail.com</p>
                        <p className="border-b">
                            Mexicano
                        </p>
                        <p className="border-b">
                            23 años
                        </p>
                        <p>
                            Francisco I. Madero, C.P. 42660 , Hidalgo, México
                        </p>
                    </div>
                </CardBody>
            </Card>  
            </Tab>
            <Tab key="music" title="Educación" className="font-Quicksand">
            <Card>
                <CardBody>
                    <div className="font-Inter">
                        <p className=" font-bold">
                            Ing. Tecnologías de la Información
                            y Comunicaciones
                        </p>
                        <p className=" text-gray-500 ml-2 ">
                            Instituto Tecnológico Superior 
                            del Occidente del Estado de Hidalgo
                        </p>
                        <p className=" font-bold border-t">
                            Técnico en Programación
                        </p>
                        <p className="text-gray-500 ml-2">
                            Centro de Bachillerato Tecnológico Industrial y de Servicios 199
                        </p>
                    </div>
                </CardBody>
            </Card>  
            </Tab>
            <Tab key="videos" title="Cursos" className="font-Quicksand">
            <Card>
                <CardBody>
                    <div className="flex flex-col gap-2 font-Inter">
                        <p className=" font-bold border-b ">
                        REACT: Hooks, State, Context, etc..
                        <span className='font-normal text-gray-400'> - Udemy</span>
                        </p>
                        <p className=" font-bold  border-b">
                        VUE3:Composition, Pinia, etc..
                        <span className='font-normal text-gray-400'> - Udemy</span>
                        </p>
                        <p className=" font-bold border-b">
                        ANGULAR
                        <span className='font-normal text-gray-400'> - Udemy</span>
                        </p>
                        <p className=" font-bold border-b">
                        GIT+GITHUB 
                        <span className='font-normal text-gray-400'> - Udemy</span>
                        </p>
                        <p className=" font-bold border-b">
                        NODE
                        <span className='font-normal text-gray-400'> - Udemy</span>
                        </p>
                        <p className=" font-bold border-b">
                        Competencias en Tecnologías Microsoft para la Productividad
                        <span className='font-normal text-gray-400'> - Microsoft</span>
                        </p>

                        <p className=" font-bold border-b">
                        Introducción a IoT, Cisco Networking Academy
                        <span className='font-normal text-gray-400'> - Cisco</span>
                        </p>

                        <p className=" font-bold border-b">
                        Data Engineering, Big Data, and Machine Learning on GCP
                        <span className='font-normal text-gray-400'> - Coursera</span>
                        </p>

                        <p className=" font-bold">
                        Smart Analytics, Machine Learning, and AI on Google Cloud
                        <span className='font-normal text-gray-400'> - Coursera</span>
                        </p>
                    </div>
                </CardBody>
            </Card>  
            </Tab>
        </Tabs>
        </div>  
    </div>
  )
}

export default AboutMe
