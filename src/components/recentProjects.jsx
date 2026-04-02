import { Button } from '@headlessui/react'
import '../App.css'

import ServiceCard from './ServiceCard'

const services = [
    // Example Code for converting to webp: cwebp ShakerWhite.JPG -o ShakerWhite.webp

    // TODO: finish container section
    // {
    // title:"Custom Containers Builds",
    // description:"Discover shipping container construction designed for any purpose—storage, tiny homes, modular offices, bullet resistant, pop-up entertainment centers, and disaster-resistant container units.",
    // images:[
    //     {
    //         jpg: "container1.jpg",
    //         webp: "container1.webp"
    //     },
    //     {
    //         jpg: "container2.jpg",
    //         webp: "container2.webp"
    //     }
    // ],
    // fullWidth: false,
    // link: "/container"
    // },
    

]

export default function recentProjects(){
    return(
        <div className="bg-[#F4F4F5] py-16 px-4 sm:px-6 lg:px-20 text-[#18181B] ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"> Services Page </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6
            auto-rows-auto items-stretch text-left sm:text-lg md:text-xl mb-6 leading-relaxed max-w-6xl mx-auto h-full">
                
                {services.map((service, index) => (
                    <div key={index} className={service.fullWidth ? "col-span-full" : ""}>
                        <ServiceCard
                        title={service.title}
                        description={service.description}
                        images={service.images}
                        fullWidth={service.fullWidth}
                        link={service.link}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}