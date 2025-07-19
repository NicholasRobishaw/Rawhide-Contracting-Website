import '../App.css'

export default function about(){
    return(
        <div >
            {/* bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-[white] */}
            <div className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white bg-fixed" 
                style={{ backgroundImage: "url('AboutUsBG.jpg')" }}>

                <div id="About Us" className="py-16 px-4 sm:px-6 lg:px-20 text-white max-w-6xl mx-auto items-center sm:px-6 lg:px-20 fontsize=72 bg-black/30 rounded-2xl" >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6">Rawhide Contracting </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6">Built for the West. Made to Last.</h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-left text-opacity-100">
                    What gives a place that unmistakable sense of home? Is it the layout, the land it stands on—or the story it tells through every beam and board?
                    At Rawhide Contracting, we believe it's more than just lumber and nails. It’s about creating spaces with meaning—built by people who care about the land, the craft, and the community. 
                    We’re a family-owned, locally based company grounded in western values: respect, hard work, and doing right by our neighbors.
                    Our crew doesn’t just work here—we live here, raise our families here, and take pride in helping our neighbors create spaces that feel like home. Whether it’s a barn that echoes the past, 
                    a custom home that blends tradition with comfort, or a shop that holds the tools of your trade—we bring the kind of quality you can feel when you walk through the door.
                    Whether we’re framing up a new build or renovating a space with character, our goal is simple: deliver quality work that stands the test of time. 
                    The Rawhide Contracting experience isn’t just about construction—it’s about bringing back the rugged charm and solid craftsmanship that built the West.
                    We’re not interested in changing the character of the community. We’re here to expand it without losing its roots—blending tradition with progress. A sense of honesty, 
                    grit, and pride runs through everything we do.
                    From backroads ranches to neighborhood homes, we’re here to help you build a space that feels true to you and the land it sits on.
                    So if you’re after true craftsmanship with a handshake you can count on—reach out and get a quote from Rawhide Contracting. Let’s build something real together.
                    </p>
                </div>
            </div>
        </div>
    )
}