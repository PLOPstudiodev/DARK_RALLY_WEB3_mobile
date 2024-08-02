"use client"
import React, { ReactNode } from 'react'
import { useAccount } from 'wagmi'
import { IoCarSport } from "react-icons/io5";

const ConnectionWrapper = ({ children }: { children: ReactNode }) => {
  const { address } = useAccount()

  return (
    <div className="flex-1 flex justify-center bg-fourth">
      {
        address ?
          <>{children}</> :
          <div className='flex justify-center items-center'>
            <div className='text-white flex items-center gap-2 font-bold py-4 px-8 bg-white/10 rounded-full'>
              <IoCarSport className='text-2xl'/> To get started, first log in with your address!</div>
          </div>
      }
    </div>
  )
}

export default ConnectionWrapper
