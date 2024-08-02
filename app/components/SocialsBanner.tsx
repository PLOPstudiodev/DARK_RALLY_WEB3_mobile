import React from 'react'
import { FaCopyright, FaDiscord, FaTelegramPlane } from 'react-icons/fa'

const SocialsBanner = () => {
  return (
    <section className="bg-fourth text-gray-300 w-full flex justify-center py-1">
      <div className='grid grid-cols-12 max-w-screen-xl w-full'>
        <p className='text-[13px] font-medium col-span-10'>Exclusive GENESIS sale !</p>
        <div className='flex items-center justify-end px-2 gap-2 col-span-2'>
          <div className='flex text-sm gap-2'>
            <a href="#" target="_blank"><FaTelegramPlane /></a>
            <a href="#" target="_blank"><FaDiscord /></a>
          </div>
          <span className='w-[1px] h-3 bg-gray-500'></span>
          <div className='flex items-center gap-1'>
            <FaCopyright className='text-xs' />
            <a href="https://www.plopstudio.com" className='text-xs font-medium'>enchartstudio</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialsBanner
