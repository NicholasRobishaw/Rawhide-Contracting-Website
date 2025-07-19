import '../App.css'


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);

//   const response = await fetch('../contact.php', {
//     method: 'POST',
//     body: formData
//   });

//   const result = await response.text();
//   alert(result); // or show a confirmation message
// };

export default function about(){
    return(
        <div className="flex flex-col bg-[#f2d7a2] py-16 px-8 sm:px-16 lg:px-20 text-[#2F1D0F] max-w-6xl mx-auto ">

            <div id="contact card" className='bg-black/10 rounded-2xl py-5 px-5 shadow-lg'>
                
                <h1 className="text-xs sm:text-lg md:text-4xl lg:text-6xl font-bold text-left mb-6"> Contact Us At </h1>
                <h1 className="text-xs sm:text-lg md:text-4xl lg:text-6xl font-bold text-left mb-6">Phone: (928)775-8991</h1>
                <h1 className="text-xs sm:text-lg md:text-4xl lg:text-6xl font-bold text-left mb-6">Email: steven.r@rawhidecontracting.com</h1>
            </div>
        
            
            {/* <form id="contact form" onSubmit={handleSubmit} className=" mt-10" >
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base/7 font-semibold text-gray-900">Quick Contact</h2>
                        <p class="mt-1 text-sm/6 text-gray-600">Fill In the information below and we will get back to you soon!</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">First name</label>
                                <div class="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Last name</label>
                                <div class="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="phone" class="block text-sm/6 font-medium text-gray-900">Phone</label>
                                <div class="mt-2">
                                    <input id="phone" name="phone" type="phone" autocomplete="phone" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
                                <div class="mt-2">
                                    <textarea name="about" id="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                </div>
                                <p class="mt-3 text-sm/6 text-gray-600">Let us know what youre looking for.</p>
                            </div>

                             <div class="sm:col-span-full">
                                <label for="service" class="block text-sm/6 font-medium text-gray-900">Service</label>
                                <div class="mt-2 grid grid-cols-1">
                                    <select id="service" name="service" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        <option>Remodeling/Renovation</option>
                                        <option>New Construction</option>
                                        <option>Addition</option>
                                        <option>Flooring</option>
                                        <option>Fencing</option>
                                        <option>ADA</option>
                                        <option>Epoxy</option>
                                        <option>Sterile</option>
                                        <option>Other</option>
                                    </select>
                                    <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                                    
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs 
                    hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sumbit</button>
                </div>
            </form> */}


        </div>


    )
}