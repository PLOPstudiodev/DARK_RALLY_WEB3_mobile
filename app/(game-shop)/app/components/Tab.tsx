"use client"
import React from 'react'
import TextWrapper from '../../../components/TextWrapper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Tab = ({ name, link }: { name: string, link: string }) => {

  const pathname = usePathname()

  return (
    <Link href={link} className={`cLink text-sm ${pathname.startsWith(link) ? 'bg-primary': 'bg-none' } hover:bg-primary ease-in-out duration-300`}>
      <span><TextWrapper>{name}</TextWrapper></span>
    </Link>
  )
}

export default Tab
