import React from 'react'

function Profile() {
    return (
        <section class="bg-gradient-to-r from-green-400 via-light-blue-500 to-blue-600 py-24">
            <div className='flex w-full bg-slate-50 rounded-2xl shadow-2xl p-12 container mx-auto'>
                <div className='w-1/2'></div>

                <div className='w-1/2'>
                    <div className='flex flex-col'>
                        <div className='tracking-wider text-lg text-gray-800 font-thin'>HELLO EVERYBODY, I AM</div>
                        <h1 className='text-4xl text-gray-800 font-bold mt-4'>TOUHID RAHMAN</h1>
                        <div className='text-lg tracking-tight text-gray-800 font-medium mt-2'>WEB DEVELOPER</div>
                    </div>

                    <div className='text-gray-500 leading-8 text-lg mt-8 pr-24'>
                        Asperiores est nulla voluptas nihil eligendi inventore. Cum minima vitae eos perspiciatis pariatur sit accusamus. Minima officiis officia qui. Animi quas qui illo totam rerum odit rerum.
                    </div>

                    <div className='space-y-4 mt-8'>
                        <div className='flex flex-row '>
                            <i className='text-blue-600 mr-6 bx bx-home text-xl'></i>
                            <div className='text-gray-500 text-lg'>Cologne, Germany</div>
                        </div>
                        <div className='flex flex-row '>
                            <i className='text-blue-600 mr-6 bx bx-phone text-xl'></i>
                            <div className='text-gray-500 text-lg'>+49 157 7130 7757</div>
                        </div>
                    </div>

                    <div className='space-x-3 mt-8'>
                        <i className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-2 px-3 rounded bx bxl-linkedin text-xl'></i>
                        <i className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-2 px-3 rounded bx bxl-twitter text-xl'></i>
                        <i className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-2 px-3 rounded bx bxl-medium-square text-xl'></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
