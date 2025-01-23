import React from 'react'
import TeamSlider from '@/components/TeamSlider'

const Page = () => {
  return (
    <div className='flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#9E9E4D]'>
        <div className="h-full w-full absolute -top-1 -left-1 bg-cover bg-no-repeat bg-[url(/assets/mount-black.png)] z-0 "></div>
        <div className="h-full w-full absolute top-0 left-0 bg-cover bg-no-repeat bg-[url(/assets/mount-blue.png)] z-0 "></div>
           <div className="flex flex-col gap-3 relative z-1">
        <h1 className="text-[50px] text-white font-semibold">
          Наша команда<span className="text-[#FFEBBA]">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-[#FFEBBA]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <TeamSlider />
    </div>
  )
}

export default Page