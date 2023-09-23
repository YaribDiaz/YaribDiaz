import {Tooltip, Button} from "@nextui-org/react";

const Techonologies = () => {
    const tech = [
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png',
            color:'primary',
            content:'REACT'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
            color:'success',
            content:'VUE3'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
            color:'default',
            content:'GITHUB'
        },
        {
            img:'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png',
            color:'success',
            content:'NODE'
        },
        {
            img:'https://www.escuelaweb.com.mx/img/java-logo.png',
            color:'default',
            content:'JAVA'
        },
        {
            img:'https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png',
            color:'secondary',
            content:'Redux'
        },
        {
            img:'https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png',
            color:'primary',
            content:'JWT'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png',
            color:'default',
            content:'AXIOS'
        },
        {
            img:'https://pngimg.es/d/mysql_PNG17.png',
            color:'primary',
            content:'MySQL'
        },
        {
            img:'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
            color:'success',
            content:'MONGODB'
        },
        {
            img:'https://i.imgur.com/Dns5wR8.png',
            color:'default',
            content:'MONGOOSE'
        },
        {
            img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png',
            color:'primary',
            content:'TAILWIND'
        },
        {
            img:'https://static-00.iconduck.com/assets.00/figma-icon-2048x2048-lvgft610.png',
            color:'default',
            content:'FIGMA'
        },
        {
            img:'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/thumb/prismaHD.png',
            color:'default',
            content:'PRISMA'
        },
        {
            img:'https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png',
            color:'default',
            content:"API's Consume"
        },
        {
            img:'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png',
            color:'default',
            content:'NEXTJS'
        },
        {
            img:'https://cdn-icons-png.flaticon.com/512/174/174854.png',
            color:'warning',
            content:'HTML5'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
            color:'primary',
            content:'CSS3'
        },
        {
            img:'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
            color:'primary',
            content:'VITE'
        },
        {
            img:'',
            color:'',
            content:''
        },

        // "default",
        // "primary",
        // "secondary",
        // "success",
        // "warning",
        // "danger",
        // "foreground",
      ];
  return (
    <div className="flex flex-col items-center justify-center">
        {/* <div className="mt-10 mb-5 w-full flex justify-center">
            <div className="bg-white w-max py-1 px-4 rounded shadow-lg">
            <h2 className="text-center font-bold ">
                Tecnologías y Habilidades
            </h2>
            </div>
            
        </div> */}

        <div className="flex justify-center flex-wrap gap-4 w-full lg:w-3/5">
        {tech.map((skill) => {
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
  )
}

export default Techonologies
