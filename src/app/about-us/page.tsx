import React from 'react'
import Image from 'next/image'
import TourSlider from '@/components/TourSlider'

const Page = () => {
  return (
    <div className='flex items-center overflow-hidden min-h-screen bg-[#455262]'>
       
      <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
      <h2 className='text-4xl font-semibold text-[#FFEBBA] flex gap-2 items-center'>Туры вместе с 
        <Image
            src={'/assets/logo-red.svg'}
            alt="logo connect"
            width={200}
            height={50}/>
      </h2>
        <p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        </div>
      <TourSlider/>
    </div>
  )
}

export default Page