import React from 'react'
import Typical from 'react-typical'

function Profile() {
    return (

        <section class="bg-gradient-to-tr from-sky-500 via-emerald-400 to-emerald-100 py-24 h-screen">
            <div class="container mx-auto px-4">
                <div className='flex flex-col sm:flex-row sm:w-full gap-12 bg-slate-50 rounded-2xl shadow-2xl p-12'>
                    <div className='sm:w-1/2'>
                        <img className='rounded-2xl block w-full' src='./Touhid_c24.jpg' alt='profile' />
                    </div>

                    <div className='sm:w-1/2'>
                        <div className='flex flex-col'>
                            <div className='tracking-wider text-lg text-gray-800 font-thin'>HELLO EVERYBODY, I AM</div>
                            <h1 className='text-4xl text-gray-800 font-bold mt-4'>TOUHID RAHMAN</h1>
                            <div className='text-lg tracking-tight text-gray-800 font-medium mt-2 uppercase'>
                                <Typical loop={Infinity}
                                    steps={[
                                        'Web Developer',
                                        2000,
                                        'Frontend Developer',
                                        2000,
                                        'Fullstack Developer',
                                        2000,
                                        'Angular Developer',
                                        2000,
                                        'Javascript Developer',
                                        2000,
                                        'Typescript Developer',
                                        2000,
                                        'Node.JS Developer',
                                        2000,
                                    ]} />
                            </div>
                        </div>

                        <div className='text-gray-500 leading-8 text-lg mt-8 max-w-md'>
                            Former pilot and now a self-learned web developer with 5 years of experience.
                            Expert in Frontend Development, REST API
                            Development, Angular, Typescript, Node.JS, and more.
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
                            <div className='flex flex-row '>
                                <i className='text-blue-600 mr-6 bx bx-envelope text-xl'></i>
                                <div className='text-gray-500 text-lg'>touhidrahman1987@gmail.com</div>
                            </div>
                        </div>

                        <div className='space-x-3 mt-8'>
                            <a href='https://www.linkedin.com/in/touhidrahman'
                                target='_blank' rel='noopener noreferrer'
                                className='text-blue-500 hover:text-blue-50 py-3 px-4 border border-solid border-blue-500 hover:bg-blue-600 rounded'>
                                <i className='bx bxl-linkedin'></i>
                            </a>
                            <a href='https://twitter.com/touhidrahman87'
                                target='_blank' rel='noopener noreferrer'
                                className='text-blue-500 hover:text-blue-50 py-3 px-4 border border-solid border-blue-500 hover:bg-blue-600 rounded'>
                                <i className='bx bxl-twitter'></i>
                            </a>
                            <a href='https://blog.touhidrahman.com'
                                target='_blank' rel='noopener noreferrer'
                                className='text-blue-500 hover:text-blue-50 py-3 px-4 border border-solid border-blue-500 hover:bg-blue-600 rounded'>
                                <i className='bx bxl-medium-square'></i>
                            </a>
                            {/* <i className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-2 px-3 rounded bx bxl-linkedin text-xl'></i>
                        <i className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-2 px-3 rounded bx bxl-twitter text-xl'></i>
                        <i className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-2 px-3 rounded bx bxl-medium-square text-xl'></i> */}
                        </div>

                        <div className='mt-16'>
                            <a href='https://drive.google.com/file/d/1FMSvEEuEuW7GEo0DkJhwRM0M2ZxIye48/view?usp=sharing'
                                target='_blank' rel='noopener noreferrer'
                                className='bg-blue-600 hover:bg-blue-700 text-blue-50 hover:cursor-pointer py-3 px-6 rounded-md'>
                                <i className='bx bxs-file-pdf mr-2'></i>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
