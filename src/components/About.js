import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(() => {
        AOS.init()
    }, [])

  return (
    <div data-aos="fade-left" className="bg-gray-100 min-h-screen px-12">
        <div className="container h-full grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto py-12">
                <div>
                    <h1 className="text-5xl font-semibold mb-9">Our Story</h1>
                     <div className="lg:relative flex justify-center  md:flex-col gap-2">
                        <figure className="lg:absolute lg:top-0 lg:left-0 h-64 w-64 ">
                            <img src="/assets/james.jpg" className="rounded-lg object-cover w-full h-full" alt="Shoes" />
                        </figure>
                        <figure className="lg:absolute lg:top-72 lg:left-20 h-64 w-64">
                            <img src="/assets/IMG_2834.jpg" className="rounded-lg object-cover w-full h-full" alt="Shoes" />
                        </figure>
                    </div>
                </div>
            
            <div data-aos="fade-left" className='flex flex-col items-center my-8 gap-10 text-center md:text-left'>
            <p className="text-lg">
                We are a passionate team of marketers dedicated to helping businesses grow and thrive in the digital world. James, the Founder, graduated from Lynn University with a degree in Marketing, with multiple years of experience in analytics and marketing strategies. Our co-founder, Cole, graduated from Florida Atlantic University with a degree in Marketing. He has many years of experience with web and software development, as well as a strong background in successful advertising strategies.  
            </p>
            <p className="text-lg">
                Our mission is to provide innovative marketing solutions tailored to our clients' needs, delivering measurable results and exceeding expectations.
            </p>
            <p className="text-lg">
                With years of experience and a deep understanding of industry trends, we are committed to driving success for our clients through creativity, strategy, and collaboration.
            </p>
            </div>
        </div>
</div>

  )
}
