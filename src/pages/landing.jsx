import '../App.css'
import { Hammer, Home, Wrench, Building2, Layers, ShelvingUnit } from "lucide-react";
import ServiceCard from '../components/ServiceCard'

export default function landing(){
    return(
        <div>
            {/*Section 1 Hero Here 
              head line
              sub headline
              trust bullets
              CTA button
              One large finished photo*/}
                <div
                    id="Headline"
                    className="
                        relative bg-cover bg-no-repeat bg-center md:bg-fixed
                        min-h-[760px] md:min-h-[980px]
                        flex items-center justify-center text-center text-white
                        px-4
                    "
                    style={{ backgroundImage: "url('BGwithBanner.jpg')" }}
                    >
                    <div className="absolute inset-0 bg-black/55"></div>

                    <div className="relative z-10 w-full max-w-4xl px-4 py-12 sm:px-8 md:px-10">
                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        Reliable Construction Services in Prescott, AZ
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
                        Quality craftsmanship for residential and commercial projects.
                        </p>

                        {/* Trust Bullets */}
                        <ul className="text-base sm:text-lg mb-8 space-y-3 text-left max-w-md mx-auto">
                        <li className="flex items-start gap-3">
                            <span className="text-yellow-500 mt-1">✔</span>
                            <span>Licensed & Insured</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-yellow-500 mt-1">✔</span>
                            <span>Serving Prescott & Surrounding Areas</span>
                        </li>

                        <li className="hidden sm:flex items-start gap-3">
                            <span className="text-yellow-500 mt-1">✔</span>
                            <span>Residential & Commercial Experience</span>
                        </li>

                        <li className="hidden sm:flex items-start gap-3">
                            <span className="text-yellow-500 mt-1">✔</span>
                            <span>Free Estimates & Fast Scheduling</span>
                        </li>
                        </ul>

                        <p className="text-base sm:text-lg mb-6 opacity-90">
                        Now scheduling projects for this month
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="w-full sm:w-auto bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                        >
                            Get a Free Estimate
                        </a>

                        <a
                            href="tel:9288994826"
                            className="w-full sm:w-auto bg-white text-yellow-700 hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                        >
                            Call Now
                        </a>
                        </div>
                    </div>
                    </div>

            {/* Section 2 Services 
              What services we do*/}
                <div className="bg-[#E7E5E4] py-16 px-6 text-center">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Services
                    </h2>

                    <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Prescott’s Trusted General Contractor for Commercial & Residential Projects, Decks, and Concrete
                    </p>

                    {/* Service Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
                        {/* Commercial */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group hover:scale-110 transition">
                            <div className="flex justify-center mb-4">
                                <Building2 className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Commercial Remodels</h3>
                            <p>Efficient, high-quality remodels for commercial properties.</p>
                        </div>

                        {/* Residential */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group hover:scale-110 transition">
                            <div className="flex justify-center mb-4">
                                <Home className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Residential Remodels</h3>
                            <p>Custom, high-finish remodels for residential projects.</p>
                        </div>

                        {/* Concrete */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group hover:scale-110 transition">
                            <div className="flex justify-center mb-4">
                                <Layers className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Concrete</h3>
                            <p>Driveways, patios, and custom concrete work built for durability.</p>
                        </div>

                        {/* Decks */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group hover:scale-110 transition">
                            <div className="flex justify-center mb-4">
                                <Hammer className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Decks</h3>
                            <p>Custom-built decks designed for outdoor living and long-term use.</p>
                        </div>

                        {/* Cabinets */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group hover:scale-110 transition">
                            <div className="flex justify-center mb-4">
                                <ShelvingUnit className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Cabinets</h3>
                            <p>High-quality Shaker and European-style cabinets built for durability and a clean finish.</p>
                        </div>

                        {/* Repairs */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition group hover:scale-110 transition">
                            <div className="flex justify-center mb-4">
                                <Wrench className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">General Repairs</h3>
                            <p>Reliable repairs and upgrades to keep your property in top shape.</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-10">
                        
                        <a
                        href="/contact"
                        className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                        >
                        Get a Free Estimate
                        </a>

                        <a
                        href="/services"
                        className="bg-white text-yellow-700 hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                        >
                        Check out our services
                        </a>

                    </div>

                    </div>


            {/* Section 3 Before and After 
              Before and after photos along with recent projects in your area*/}
               
            <div className="bg-white py-16 px-6 text-center">
            
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
                <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    See how Rawhide transforms spaces with quality work that lasts.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {/* Project 1 */}
                    <ServiceCard
                        title="Deck Renovation – Prescott"
                        description="Full deck renovation with reinforced framing and an upgraded finish for long-term durability."
                        images={[
                            "StarRockDeckAfter.webp"
                        ]}
                        link="/contact"
                        buttonText="Get a Similar Estimate"
                        />


                    {/* Project 2 */}
                    <ServiceCard
                        title="Concrete Path – Prescott"
                        description="Located, excavated, and poured a new concrete path for students at Embry Riddle Areonautical University."
                        images={[
                            "ConcreteERAU2.webp"
                            
                        ]}
                        link="/contact"
                        buttonText="Get a Similar Estimate"
                        />

                    {/* Project 3 */}
                    <ServiceCard
                        title="Deck Renovation – Chino Valley"
                        description="Sanded and refinished deck boards, installed a new child-safe railing, and stained the entire deck."
                        images={[
                            "DeckRefinish.webp"
                        ]}
                        link="/contact"
                        buttonText="Get a Similar Estimate"
                        />

                    {/* Add more projects as needed */}
                </div>

                {/* CTA */}
                <div className="mt-12">
                    <a
                    href="/contact"
                    className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                    >
                    Schedule Your Project Today
                    </a>
                </div>
            </div>
            
            {/* Section 4 - Why Choose Us */}
                        

            <div className="relative bg-cover bg-no-repeat be-center md:bg-fixed min-h-[1080] "
                style={{ backgroundImage: "url('Deck4.webp')" }}
                >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className='relative py-16 px-6 text-center '>
                    
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Why Choose Rawhide</h2>
                    <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        Reliable construction services with a focus on quality, safety, and local expertise.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

                        {/* Benefit 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center">
                        <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                        <p>Peace of mind knowing your project is safe and compliant with all regulations.</p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center">
                        <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                        <p>We know Prescott & surrounding areas, ensuring projects fit local needs and codes.</p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center">
                        <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 12c2 0 4-1 4-3s-2-3-4-3-4 1-4 3 2 3 4 3zM12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                        <p>Our crew is trained for both commercial and residential projects of any size.</p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition flex flex-col items-center">
                        <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                        <p>We use the best materials and techniques to ensure your project lasts for years.</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-12">
                        <a
                        href="/contact"
                        className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                        >
                        Get Your Free Estimate
                        </a>
                    </div>
                </div>
            </div>

            {/* Section 5 - Service Areas */}
            <div className="bg-white py-12 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Prescott & Surrounding Areas</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Rawhide Contracting proudly provides decks, concrete, epoxy, and commercial/residential remodeling services across Prescott, Prescott Valley, Chino Valley, and nearby communities.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-yellow-700 font-semibold">
                    <span className="px-4 py-2 bg-white rounded shadow">Prescott</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Prescott Valley</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Chino Valley</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Mayer</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Paulden</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Flagstaff</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Sedona</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Cottonwood</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Camp Verde</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Yavapai County</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Coconino County</span>
                    <span className="px-4 py-2 bg-white rounded shadow">Maricopa County</span>
                </div>

                <div className="mt-8">
                    <a
                    href="/contact"
                    className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                    >
                    Contact Us for Your Area
                    </a>
                </div>
            </div>

            {/* Section 6 - Contact */}
            <div className="bg-yellow-700 py-16 px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Estimate Today</h2>
                <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    Contact Rawhide Contracting for your next project in Prescott and surrounding areas. Quick response, licensed & insured.
                </p>

                <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">

                    {/* Contact Form */}
                    <form
                        action="https://formsubmit.co/8a8916336127c0255dd17f3f56af8cef"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* NAME */}
                        <div>
                        <label className="block text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="Name"
                            required
                            className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                        />
                        </div>

                        {/* EMAIL */}
                        <div>
                        <label className="block text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="Email"
                            required
                            className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                        />
                        </div>

                        {/* PHONE */}
                        <div>
                        <label className="block text-sm font-semibold mb-1">Phone</label>
                        <input
                            type="text"
                            name="Phone"
                            className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                        />
                        </div>

                        {/* MESSAGE */}
                        <div>
                        <label className="block text-sm font-semibold mb-1">Project Description</label>
                        <textarea
                            name="Message"
                            rows="4"
                            className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                        />
                        </div>
                        <button
                        type="submit"
                        className="w-full rounded-md bg-[#3F3F46]  px-4 py-3 text-white font-semibold hover:bg-[#2F1D0F]"
                        >
                        Let’s Talk
                        </button>
                    </form>

                    {/* Alternate Contact Info */}
                    <div className="flex flex-col justify-center items-center gap-6">
                    <a href="contact" className="bg-white text-yellow-700 hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold">
                        Call Now
                    </a>

                    <p className="text-white text-lg">
                        Or email us at <a href="mailto:info@rawhidecontracting.com" className="underline">info@rawhidecontracting.com</a>
                    </p>

                    {/* Optional Map */}
                    <iframe
                        title="Rawhide Contracting Prescott Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5583.680213932817!2d-112.48010212426199!3d34.552849072972535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d292aad0bd301%3A0xd9a3df7c25b3de88!2s637%20W%20Hillside%20Ave%20c7%2C%20Prescott%2C%20AZ%2086301!5e1!3m2!1sen!2sus!4v1775085376462!5m2!1sen!2sus" 
                        className="w-full h-64 rounded-xl border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    </div>

                </div>
            </div>

            
        </div>
    )
}
