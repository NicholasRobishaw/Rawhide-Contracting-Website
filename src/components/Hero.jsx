import '../App.css'

export default function Hero(){
    return(
        <>{/* Hero */}
            <div id='Headline' 
                // mx-auto max-w-7xl px-2 sm:px-6 lg:px-8
            class=" bg-cover bg-center bg-fixed 
                    h-250 flex flex-col items-center justify-center text-center 
                    text-[white] " 
            style={{ backgroundImage: "url('../../Hero bg.png')" }}>
                
                <div className='bg-black/30 rounded-2xl py-5 px-5'>
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">
                    Reliable Contracting,<br />Rooted in the West.
                    </h1>

                    <p class="text-lg md:text-xl mb-6">
                    Bringing trusted craftsmanship to Arizona homes and businesses.
                    </p>

                    <div class="flex gap-4 justify-center">
                        <a href="/contact" class="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-3 rounded-md">
                            Get a Free Estimate
                        </a>

                        <a href="/contact" class="bg-white text-yellow-700 hover:text-yellow-800 px-6 py-3 rounded-md">
                            Call Now
                        </a>
                    
                    </div>
                </div>
            </div> </>
    )
}