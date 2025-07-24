import '../App.css'

import ServiceCard from '../components/ServiceCard'

const services = [
    {
    title: "Remodeling and Renovations",
    description: "Bring new life to the old. Whether it's a dated kitchen, worn-out bathroom, or an entire home in need of refreshment, we specialize in turning tired spaces into functional, beautiful environments—all while honoring the character of your home.",
    images:[
            {
                jpg: "ERAU_Epoxy_ Before_After2.jpg",
                webp:"ERAU_Epoxy_ Before_After2.webp",
            },
            {
                jpg: "ERAU_Epoxy_ Before_After1.jpg",
                webp:"ERAU_Epoxy_ Before_After1.webp",
            },
            {
                jpg: "Remodel1.jpg",
                webp:"Remodel1.webp",
            },
            {
                jpg: "Remodel2.jpg",
                webp:"Remodel2.webp",
            },
            ]
    },

    {
    title: "New Construction",
    description: "Building from the ground up—done right. From custom homes to small structures, we deliver quality craftsmanship that’s rooted in experience and attention to detail. We build with integrity, transparency, and pride in every nail.",
    images:[
            {
                jpg: "Framing1.jpg",
                webp:"Framing1.webp",
            },
            {
                jpg: "NewBuildBlock1.jpg",
                webp:"NewBuildBlock1.webp",
            },
            {
                jpg: "NewBuildBlock2.jpg",
                webp:"NewBuildBlock2.webp",
            },
            {
                jpg: "Framing2.jpg",
                webp:"Framing2.webp",
            },
            {
                jpg: "Framing3.jpg",
                webp:"Framing3.webp",
            },
    ]
    },

    {
    title: "Additions",
    description: "More space, more value. Whether you’re growing your family or just need more elbow room, we create seamless home additions that blend naturally with your existing structure—both in function and in form.",
    images:[
            {
                jpg: "Addition1.jpg",
                webp:"Addition1.webp",

            },
            {
                jpg: "Addition2.jpg",
                webp:"Addition2.webp",
            },
            ]
    },

    {
    title: "Commercial Projects",
    description: "Structures that support your success. We offer reliable, streamlined building solutions for commercial spaces—whether you're launching a new location or upgrading an existing one. Built tough, built smart, built to last.",
    images:[
            {
                jpg: "Commercial1.jpg",
                webp:"Commercial1.webp",
            },
            {
                jpg: "Commercial2.jpg",
                webp:"Commercial2.webp",
            },
    ]
    },

    {
    title: "Flooring",
    description: "Foundation for every step. From hardwood to tile and everything in between, we offer expert flooring installation that enhances the beauty, durability, and comfort of your space—residential or commercial.",
    images:[
            {
                jpg: "Flooring5.jpg",
                webp:"Flooring5.webp",
            },
            {
                jpg: "Flooring1.jpg",
                webp:"Flooring1.webp",
            },
            {
                jpg: "Flooring2.jpg",
                webp:"Flooring2.webp",
            },
            {
                jpg: "Flooring3.jpg",
                webp:"Flooring3.webp",
            },
            {
                jpg: "Flooring4.jpg",
                webp:"Flooring4.webp",
            },
            {
                jpg: "Flooring6.jpg",
                webp:"Flooring6.webp",
            },
            ]
    },

    {
    title: "Fencing",
    description: "Strong boundaries, clean lines. Whether you need privacy, security, or a touch of western charm, our fencing services deliver durable, custom-built solutions that stand the test of time.",
    images:[
            {
                jpg: "Fencing1.jpg",
                webp:"Fencing1.webp",
            },
            {
                jpg: "Fencing2.jpg",
                webp:"Fencing2.webp",
            },
            {
                jpg: "Fencing3.jpg",
                webp:"Fencing3.webp",
            },
    ]
    },

    // {
    // title: "ADA",
    // description: "Where accessibility meets craftsmanship. We build and remodel with inclusivity in mind—ensuring your space meets ADA standards without compromising style or function. From ramps and grab bars to full ADA-compliant layouts, we make every inch count.",
    // images:[]
    // },

    {
    title: "Polished Concrete",
    description: "Upgrade your space with the durability and sleek appearance of polished concrete. Perfect for high-traffic areas, this low-maintenance flooring solution offers a modern, professional finish that resists wear, and staining. Whether you're revitalizing an entryway, showroom, or workspace, our polished concrete delivers long-lasting performance and a clean, high-end look tailored to your needs.",
    images:[
            {
                jpg: "polished_concrete3.jpg",
                webp:"polished_concrete3.webp",
            },
            {
                jpg: "polished_concrete4.jpg",
                webp:"polished_concrete4.webp",
            },
            {
                jpg: "polished_concrete5.jpg",
                webp:"polished_concrete5.webp",
            },
            {
                jpg: "polished_concrete.jpg",
                webp:"polished_concrete.webp",
            },
            {
                jpg: "polished_concrete2.jpg",
                webp:"polished_concrete2.webp",
            },
            ]
    },

    {
    title: "Epoxy",
    description: "Tough as nails, clean as a whistle. Our epoxy flooring solutions offer long-lasting durability, chemical resistance, and a polished look for garages, warehouses, kitchens, and more. Ideal for high-traffic or industrial environments where performance matters.",
    images:[
            {
                jpg: "Epoxy5.jpg",
                webp:"Epoxy5.webp",
            },
            {
                jpg: "Epoxy1.jpg",
                webp:"Epoxy1.webp",
            },
            {
                jpg: "Epoxy2.jpg",
                webp:"Epoxy2.webp",
            },
            {
                jpg: "Epoxy3.jpg",
                webp:"Epoxy3.webp",
            },
            {
                jpg: "Epoxy4.jpg",
                webp:"Epoxy4.webp",
            },
            {
                jpg: "Epoxy6.jpg",
                webp:"Epoxy6.webp",
            },
            ]
    },

    {
    title: "Sterile OR Rooms",
    description: "Built for precision. Designed for safety. We construct and retrofit sterile operating rooms and cleanroom environments to meet the highest standards of hygiene and regulation. Every detail—airflow, surfaces, lighting—is handled with technical care and medical-grade expertise.",
    images:[
            {
                jpg: "Sterile1.jpg",
                webp:"Sterile1.webp",
            },
            {
                jpg: "Sterile2.jpg",
                webp:"Sterile2.webp",
            },
            {
                jpg: "Sterile3.jpg",
                webp:"Sterile3.webp",
            },
            {
                jpg: "Dental1.jpg",
                webp:"Dental1.webp",
            },
            {
                jpg: "Dental2.jpg",
                webp:"Dental2.webp",
            },
            {
                jpg: "Dental3.jpg",
                webp:"Dental3.webp",
            },
            {
                jpg: "Dental4.jpg",
                webp:"Dental4.webp",
            },
            ]
    },

]

export default function about(){
    return(
        <div className="bg-[#efcf8f] py-16 px-4 sm:px-6 lg:px-20 text-[#2F1D0F] ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"> Services Page </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 
            text-left items-center sm:text-lg md:text-xl mb-6 leading-relaxed max-w-6xl mx-auto flex h-full">
                
                {services.map((service, index) =>(
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        images={service.images}
                    />
                ))}

            </div>
        </div>
    )
}