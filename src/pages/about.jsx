import '../App.css'
import {
  SectionReveal,
  CardReveal,
  ImageReveal,
  TextReveal,
  SimpleFade,
} from "../components/revealPresets";

export default function about(){
    return(
        <div >
            {/* bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-[white] */}
            <div className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white bg-fixed" 
                style={{ backgroundImage: "url('AboutUsBG.jpg')" }}>

                <div
                id="about-us"
                className="py-16 px-4 sm:px-6 lg:px-20 text-white max-w-6xl mx-auto bg-black/60 rounded-2xl space-y-8"
                >
                    <SimpleFade>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
                        Rawhide Contracting
                        </h1>
                    </SimpleFade>

                    <SimpleFade>
                        <h2 className="font-western text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-center text-gray-200">
                            Built for the West. Made to Last.
                        </h2>
                    </SimpleFade>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            What gives a place that unmistakable sense of home? Is it the layout, the
                            land it stands on—or the story it tells through every beam and board?
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            At Rawhide Contracting, we believe it’s more than just lumber and nails.
                            It’s about creating spaces with meaning—built by people who care about the
                            land, the craft, and the community.
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            We’re a family-owned, locally based company grounded in western values:
                            respect, hard work, and doing right by our neighbors. Our crew doesn’t just
                            work here—we live here, raise our families here, and take pride in helping
                            our neighbors create spaces that feel like home.
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            Whether it’s a barn that echoes the past, a custom home that blends tradition
                            with comfort, or a shop that holds the tools of your trade—we bring the kind
                            of quality you can feel when you walk through the door.
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            From framing a new build to renovating a space with character, our goal is
                            simple: deliver craftsmanship that stands the test of time and honors the
                            rugged charm that built the West.
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            We’re not here to change the character of the community—we’re here to expand
                            it without losing its roots. Honesty, grit, and pride run through everything
                            we do.
                        </p>
                    </TextReveal>

                    <TextReveal>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            From backroads ranches to neighborhood homes, we’ll help you build a space
                            that feels true to you and the land it sits on. If you’re after true
                            craftsmanship with a handshake you can count on, reach out and get a quote
                            from Rawhide Contracting. Let’s build something real together.
                        </p>
                    </TextReveal>
                </div>
            </div>
        </div>
    )
}