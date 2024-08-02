import WagmiWrapper from '@/app/(game-shop)/app/components/WagmiWrapper'
import React, { useEffect } from 'react'
import LoginButton from './components/LoginButton'
import TextWrapper from '@/app/components/TextWrapper'
import { useAccount } from 'wagmi'


const page = () => {

  /* https://www.epicgames.com/id/login/google/forward?extLoginState=eyJ0cmFja2luZ1V1aWQ */

  return (
    <WagmiWrapper>
      <div className='bg-fourth h-screen flex justify-center items-center'>
        <div className='bg-[#202020] p-10 text-white flex flex-col gap-4 items-center text-center rounded-sm'>
          <img src="./images/logo.png" alt="Dark Rally Logo" className='w-[80px]' />
          <p className='text-[#ffffffb8] text-sm w-[50ch]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum reiciendis mollitia voluptas at facere placeat, ratione ipsum accusantium ipsam distinctio!</p>
          <TextWrapper>
            <LoginButton/>
          </TextWrapper>
        </div>
      </div>
    </WagmiWrapper>
  )
}

export default page
