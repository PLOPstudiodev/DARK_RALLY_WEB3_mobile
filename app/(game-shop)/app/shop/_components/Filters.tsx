"use client"
import React, { ReactNode } from 'react'
import { MdSmartToy } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { AiOutlineSkin } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IFilterItem {
  name: string,
  icon: ReactNode,
  id: number
  link: string
}

const FilterItem: React.FC<IFilterItem> = ({ name, icon, id, link }) => {

  const fullPath = usePathname()
  const pathSplited = fullPath.split('/')
  const path = pathSplited[pathSplited.length - 1]

  return (
    <Link
      href={`/app/shop/${link}`}
      className={`${link === path ? 'bg-primary' : 'bg-none border border-secondary' } cursor-pointer text-white  rounded-full flex items-center justify-center gap-2 py-2`}>
      {icon}
      <p> {name} </p>
    </Link>
  )
}

const Filters = () => {
  return (
    <div className='grid grid-cols-4 w-1/2 gap-10'>
      <FilterItem link='vehicles' id={522} name='VEHICLE' icon={<FaCarSide />} />
      <FilterItem link='toys' id={546} name='TOY' icon={<MdSmartToy />} />
      <FilterItem link='skins' id={533} name='SKIN' icon={<AiOutlineSkin />} />
      <FilterItem link='trophy' id={532} name='TROPHY' icon={<FaTrophy />} />
    </div>
  )
}

export default Filters
