import Image from 'next/image'
import React from 'react'
import Title from './Title'
import about1 from "../images/about-1.webp"
import about2 from "../images/about-2.webp"
import about3 from "../images/about-3.webp"
import Button from './Button'

const About = () => {
  return (
     <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-14 gap-10  md:py-40 py-20 md:px-20 sm:px-8 px-4">
      <div className='relative '>
        <Image src={about1} width={350} height={460} alt="about" />
        <Image src={about2} width={150} height={170} alt="about" className='absolute sm:w-[150] w-auto  top-6  xl:right-20 lg:right-10 sm:right-6 right-0 '/>
    <Image 
      src={about3} 
      width={300} 
      height={300} 
      alt="about" 
      className="absolute p-4 bg-white sm:w-[300px] w-[200px] -bottom-12 right-0" 
    />
        
      </div>

      <div className='sm:mt-0 mt-10'>
        <Title  title="About Us" subheading="Best Haircut Salons For Men Women" subtitle="About" />
       
        <p className='text-base font-sans pb-8'>Haircut is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.</p>
       
        <p  className='text-xl mb-8 pl-4 py-1 border-l-2 border-[#b48e40]'>Were a leading independent salon in Dubai, offering everything from haircuts to exfoliation and</p>

      <Button text="READ MORE"/>
      </div>
    </div>
 
  )
}

export default About