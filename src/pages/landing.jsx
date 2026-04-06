import '../App.css'
import { Hammer, Home, Wrench, Building2, Layers, ShelvingUnit } from "lucide-react";
import ServiceCard from '../components/ServiceCard'
import {
  SectionReveal,
  CardReveal,
  ImageReveal,
  TextReveal,
  SimpleFade,
} from "../components/revealPresets";

export default function Landing() {
  return (
    <div>
      {/* Section 1 Hero */}
      <section
        id="Headline"
        className="
          relative bg-cover bg-no-repeat bg-center md:bg-fixed
          min-h-[760px] md:min-h-[980px]
          flex items-center justify-center text-center text-white
          px-4 overflow-hidden
        "
        style={{ backgroundImage: "url('BGwithBanner.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]"></div>

        <TextReveal className="relative z-10 w-full max-w-4xl px-4 py-12 sm:px-8 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight tracking-wide">
            Built for the West.
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl mx-auto tracking-wide">
            Quality craftsmanship for residential and commercial projects.
          </h2>

          <p className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl mx-auto tracking-wide">
            Reliable Construction Services in Prescott, AZ
          </p>

          <SimpleFade delay={0.1}>
            <ul className="text-base sm:text-lg mb-8 space-y-3 text-left max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✔</span>
                <span>Licensed &amp; Insured</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✔</span>
                <span>Serving Prescott &amp; Surrounding Areas</span>
              </li>

              <li className="hidden sm:flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✔</span>
                <span>Residential &amp; Commercial Experience</span>
              </li>

              <li className="hidden sm:flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✔</span>
                <span>Free Estimates &amp; Fast Scheduling</span>
              </li>
            </ul>
          </SimpleFade>

          <p className="text-base sm:text-lg mb-6">
            Now scheduling projects for this month
          </p>

          <SimpleFade delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="btn w-full sm:w-auto bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
              >
                Get a Free Estimate
              </a>

              <a
                href="tel:9288994826"
                className="btn w-full sm:w-auto bg-white text-yellow-700 hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
              >
                Call Now
              </a>
            </div>
          </SimpleFade>
        </TextReveal>
      </section>

      {/* Section 2 Services */}
      <section className="relative -mt-16 md:-mt-24 z-20 bg-[#E7E5E4] py-16 px-6 text-center rounded-t-[2rem] shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('WoodTexture.jpg')]"></div>
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-700/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/40 blur-3xl rounded-full"></div>

        <div className="relative">
            <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
            </h2>

            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Prescott’s Trusted General Contractor for Commercial &amp; Residential Projects, Decks, and Concrete
            </p>
            </SectionReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <CardReveal>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <Building2 className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial Remodels</h3>
                <p>Efficient, high-quality remodels for commercial properties.</p>
                </div>
            </CardReveal>

            <CardReveal delay={0.05}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <Home className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Residential Remodels</h3>
                <p>Custom, high-finish remodels for residential projects.</p>
                </div>
            </CardReveal>

            <CardReveal delay={0.1}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <Layers className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Concrete</h3>
                <p>Driveways, patios, and custom concrete work built for durability.</p>
                </div>
            </CardReveal>

            <CardReveal delay={0.15}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <Hammer className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Decks</h3>
                <p>Custom-built decks designed for outdoor living and long-term use.</p>
                </div>
            </CardReveal>

            <CardReveal delay={0.2}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <ShelvingUnit className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cabinets</h3>
                <p>High-quality Shaker and European-style cabinets built for durability and a clean finish.</p>
                </div>
            </CardReveal>

            <CardReveal delay={0.25}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <Wrench className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">General Repairs</h3>
                <p>Reliable repairs and upgrades to keep your property in top shape.</p>
                </div>
            </CardReveal>
            </div>

            <SimpleFade delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-10">
                <a
                href="/contact"
                className="btn bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                >
                Get a Free Estimate
                </a>

                <a
                href="/services"
                className="btn bg-white text-yellow-700 hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                >
                Check out our services
                </a>
            </div>
            </SimpleFade>
        </div>
      </section>

      {/* Section 3 Recent Projects */}
      <section className="relative bg-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-700/5 blur-3xl rounded-full"></div>

        <div className="relative">
            <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                See how Rawhide transforms spaces with quality work that lasts.
            </p>
            </SectionReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <CardReveal>
                <ServiceCard
                title="Deck Renovation – Prescott"
                description="Full deck renovation with reinforced framing and an upgraded finish for long-term durability."
                images={["StarRockDeckAfter.webp"]}
                link="/contact"
                buttonText="Get a Similar Estimate"
                />
            </CardReveal>

            <CardReveal delay={0.1}>
                <ServiceCard
                title="Concrete Path – Prescott"
                description="Located, excavated, and poured a new concrete path for students at Embry Riddle Areonautical University."
                images={["ConcreteERAU2.webp"]}
                link="/contact"
                buttonText="Get a Similar Estimate"
                />
            </CardReveal>

            <CardReveal delay={0.2}>
                <ServiceCard
                title="Deck Renovation – Chino Valley"
                description="Sanded and refinished deck boards, installed a new child-safe railing, and stained the entire deck."
                images={["DeckRefinish.webp"]}
                link="/contact"
                buttonText="Get a Similar Estimate"
                />
            </CardReveal>
            </div>

            <SimpleFade delay={0.15}>
            <div className="mt-12">
                <a
                href="/contact"
                className="btn bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
                >
                Schedule Your Project Today
                </a>
            </div>
            </SimpleFade>
        </div>
      </section>

      {/* Section 4 Why Choose Us */}
      <section
        className="relative bg-cover bg-no-repeat bg-center md:bg-fixed min-h-[720px]"
        style={{ backgroundImage: "url('Deck4.webp')" }}
      >
        <div className="absolute inset-0 bg-black/57"></div>

        <div className="relative py-16 px-6 text-center">
          <SectionReveal>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Why Choose Rawhide Contracting
            </h2>
            <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Reliable construction services with a focus on quality, safety, and local expertise.
            </p>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <CardReveal>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Licensed &amp; Insured</h3>
                <p>Peace of mind knowing your project is safe and compliant with all regulations.</p>
              </div>
            </CardReveal>

            <CardReveal delay={0.05}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p>We know Prescott &amp; surrounding areas, ensuring projects fit local needs and codes.</p>
              </div>
            </CardReveal>

            <CardReveal delay={0.1}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 12c2 0 4-1 4-3s-2-3-4-3-4 1-4 3 2 3 4 3zM12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p>Our crew is trained for both commercial and residential projects of any size.</p>
              </div>
            </CardReveal>

            <CardReveal delay={0.15}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                <svg className="w-12 h-12 text-yellow-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                <p>We use the best materials and techniques to ensure your project lasts for years.</p>
              </div>
            </CardReveal>
          </div>

          <SimpleFade delay={0.2}>
            <div className="mt-12">
              <a
                href="/contact"
                className="btn bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
              >
                Get Your Free Estimate
              </a>
            </div>
          </SimpleFade>
        </div>
      </section>

      {/* Section 5 Service Areas */}
      <section className="bg-white py-12 px-6 text-center">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving Prescott &amp; Surrounding Areas
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Rawhide Contracting proudly provides decks, concrete, epoxy, and commercial/residential remodeling services across Prescott, Prescott Valley, Chino Valley, and nearby communities.
          </p>
        </SectionReveal>

        <SimpleFade delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 text-yellow-700 font-semibold uppercase tracking-wider">
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
        </SimpleFade>

        <SimpleFade delay={0.2}>
          <div className="mt-8">
            <a
              href="/contact"
              className="btn bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
            >
              Contact Us for Your Area
            </a>
          </div>
        </SimpleFade>
      </section>

      {/* Section 6 Contact */}
      <section className="bg-yellow-700 py-16 px-6 text-center text-white">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get a Free Estimate Today
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Contact Rawhide Contracting for your next project in Prescott and surrounding areas. Quick response, licensed &amp; insured.
          </p>
        </SectionReveal>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <TextReveal>
            <form
              action="https://formsubmit.co/8a8916336127c0255dd17f3f56af8cef"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="Name"
                  required
                  className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  name="Phone"
                  className="block w-full rounded-md bg-black/30 px-3.5 py-2 text-white"
                />
              </div>

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
                className="btn w-full rounded-md bg-[#3F3F46] px-4 py-3 text-white font-semibold hover:bg-[#2F1D0F]"
              >
                Let’s Talk
              </button>
            </form>
          </TextReveal>

          <ImageReveal delay={0.1}>
            <div className="flex flex-col justify-center items-center gap-6">
              <a
                href="tel:9288994826"
                className="btn bg-white text-yellow-700 hover:text-yellow-800 px-8 py-4 rounded-md hover:scale-105 hover:shadow-2xl transition font-semibold"
              >
                Call Now
              </a>

              <p className="text-white text-lg">
                Or email us at{" "}
                <a href="mailto:info@rawhidecontracting.com" className="underline">
                  steven.r@rawhidecontracting.com
                </a>
              </p>

              <iframe
                title="Rawhide Contracting Prescott Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5583.680213932817!2d-112.48010212426199!3d34.552849072972535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d292aad0bd301%3A0xd9a3df7c25b3de88!2s637%20W%20Hillside%20Ave%20c7%2C%20Prescott%2C%20AZ%2086301!5e1!3m2!1sen!2sus!4v1775085376462!5m2!1sen!2sus"
                className="w-full h-64 rounded-xl border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </ImageReveal>
        </div>
      </section>
    </div>
  );
}