"use client"
import React, { useState } from 'react'
import TextWrapper from './TextWrapper'
import Link from 'next/link'


const CLink = ({ path, text }: { path: string, text: string }) => {

  const [active, setActive] = useState(false)

  const toggleActive = () => setActive(!active)

  return (
    <TextWrapper>
      <Link
        href={path}
        onClick={() => setActive}
        className={`cLink ${active ? 'bg-primary' : ''} hover:bg-primary text-xs ease-in-out duration-300`}> <span> {text} </span></Link>
    </TextWrapper>

  )
}

const Header = () => {
  return (
    <header className='flex justify-center absolute top-[44px] z-[1] w-full'>
      <nav className='max-w-screen-xl w-full flex items-center justify-between p-6 bg-black/70 rounded-b-md'>
        <Link href={'/'}><img className='w-[150px]' src="./images/logo.png" alt="" /></Link>
        <div className='flex'>
          <CLink path='/' text='NFT GAME'></CLink>
          <CLink path='/metarally' text='METARALLY'></CLink>
          <CLink path='/app/shop' text='SHOP'></CLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
