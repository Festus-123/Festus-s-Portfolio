"use client"
import React from 'react'
import Image from 'next/image'

const About_Preview = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <h1 className='text-center font-extrabold text-2xl sm:text-24l md:text-6xl text-amber-900'>
        ABOUT ME
      </h1>
      {/* Details Purview */}
       <div className='flex flex-col gap-5 md:flex-row '>
        <Image 
            src="/hero-img.jpg"
            alt='My Image'
            width={352}
            height={352}
            className='rounded border-4 border-black place-self-center md:place-self-start'/>
        <p>
            Hi, I am festus PHILLIP a software developer with 4yrs experience.
            specialised in skills like team building and collaborative work i am a 
            a problem solver and a goal driven practionist. <br />
            I am a Javascript Software developer and a creative Designer and in my many years of learning 
            and Experimenting i have developed and created mind blowing projectsthat are not only User friendly
            and attractive but as well actually solves a problem 
        </p>

       </div>
    </div>
  )
}

export default About_Preview
