import '../App.css'

import ServiceCard from '../components/ServiceCard'

const services = [
    {
    title: "Remodeling and Renovations",
    description: "Bring new life to the old. Whether it's a dated kitchen, worn-out bathroom, or an entire home in need of refreshment, we specialize in turning tired spaces into functional, beautiful environments—all while honoring the character of your home.",
    images:[
        "../../ERAU_Epoxy_ Before_After2.png",
        "../../ERAU_Epoxy_ Before_After1.png",
        "../../Remodel1.jpg",
        "../../Remodel2.jpg",
            ]
    },

    {
    title: "New Construction",
    description: "Building from the ground up—done right. From custom homes to small structures, we deliver quality craftsmanship that’s rooted in experience and attention to detail. We build with integrity, transparency, and pride in every nail.",
    images:[
        "../../Framing1.jpg",
        "../../NewBuildBlock1.jpg",
        "../../NewBuildBlock2.jpg",
        "../../Framing2.jpg",
        "../../Framing3.jpg"
    ]
    },

    {
    title: "Additions",
    description: "More space, more value. Whether you’re growing your family or just need more elbow room, we create seamless home additions that blend naturally with your existing structure—both in function and in form.",
    images:[
            "../../Addition1.jpg",
            "../../Addition2.jpg"
            ]
    },

    {
    title: "Commercial Projects",
    description: "Structures that support your success. We offer reliable, streamlined building solutions for commercial spaces—whether you're launching a new location or upgrading an existing one. Built tough, built smart, built to last.",
    images:[
        "../../Commercial1.jpg",
        "../../Commercial2.jpg"
    ]
    },

    {
    title: "Flooring",
    description: "Foundation for every step. From hardwood to tile and everything in between, we offer expert flooring installation that enhances the beauty, durability, and comfort of your space—residential or commercial.",
    images:[
            "../../Flooring5.jpeg",
            "../../Flooring1.jpeg",
            "../../Flooring2.jpeg",
            "../../Flooring3.jpeg",
            "../../Flooring4.jpeg",
            "../../Flooring6.jpg"
            ]
    },

    {
    title: "Fencing",
    description: "Strong boundaries, clean lines. Whether you need privacy, security, or a touch of western charm, our fencing services deliver durable, custom-built solutions that stand the test of time.",
    images:[
        "../../Fencing1.png",
        "../../Fencing2.png",
        "../../Fencing3.png"
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
            "../../polished_concrete.png",
            "../../polished_concrete2.png",
            ]
    },

    {
    title: "Epoxy",
    description: "Tough as nails, clean as a whistle. Our epoxy flooring solutions offer long-lasting durability, chemical resistance, and a polished look for garages, warehouses, kitchens, and more. Ideal for high-traffic or industrial environments where performance matters.",
    images:[
            "../../Epoxy5.jpg",
            "../../Epoxy1.jpg",
            "../../Epoxy2.jpg",
            "../../Epoxy3.jpg",
            "../../Epoxy4.jpg",
            "../../Epoxy6.jpg",
            ]
    },

    {
    title: "Sterile OR Rooms",
    description: "Built for precision. Designed for safety. We construct and retrofit sterile operating rooms and cleanroom environments to meet the highest standards of hygiene and regulation. Every detail—airflow, surfaces, lighting—is handled with technical care and medical-grade expertise.",
    images:[
            "../../Sterile1.jpg",
            "../../Sterile2.jpg",
            "../../Sterile3.jpg",
            "../../Dental1.jpg",
            "../../Dental2.jpg",
            "../../Dental3.jpg",
            "../../Dental4.jpg"
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