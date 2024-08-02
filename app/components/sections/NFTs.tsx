import React from 'react'
import Subtitle from '../Subtitle'
import { cars } from '@/app/constants/nfts'
import { FaBell } from "react-icons/fa";
import TextWrapper from '../TextWrapper';
import Paragraph from '../Paragraph';

interface ICarItem {
  handling: string
  speed: string
  aceleration: string
  weight: string
  overpower: string
  img: string
  name: string
}

const CarItem: React.FC<ICarItem> = ({ aceleration, handling, overpower, speed, weight, img, name }) => {

  return (
    <div className='w-[380px] h-[540px] relative group'>
      <div className='flex flex-col gap-4 justify-center items-center absolute w-full h-full bg-primary opacity-0 group-hover:opacity-100 bg-opacity-0 group-hover:bg-opacity-70 ease-in-out duration-500'>
        <img src="./images/logo.png" alt="" className='w-[60px] h-[60px]' />
        <TextWrapper>
          <h2 className={`uppercase text-black text-[22px]`}>GET IT <span className='text-white'>NOW!</span> </h2>
        </TextWrapper>
      </div>
      <img src={`./images/nfts/vehicles/${img}.jpg`} alt="" />
      <div className='absolute bottom-5 left-5 opacity-100 group-hover:opacity-0 ease-in-out duration-500 text-white text-xs backdrop-blur-md bg-black/10 p-4'>
        <TextWrapper><h3 className='text-[22px] font-bold uppercase'> {name} </h3></TextWrapper>
        <div className='flex flex-col gap-1 mt-2'>
          <p>HANDLING: {handling} </p>
          <p>SPEED: {speed} </p>
          <p>ACELERATION: {aceleration} </p>
          <p>WEIGHT: {weight} </p>
          <p>OVERPOWER: {overpower} </p>
        </div>
      </div>
    </div>
  )
}

const NFTs = () => {
  return (
    <div className='pb-[115px] '>
      <div className='flex flex-col items-center py-[115px]'>
        <Subtitle first="THE" second="COLLECTION" />
        <Paragraph>This Unique Genesis Collection will never be part of any pack or event, all vehicles have 25% more POWER! Ride them all!.</Paragraph>
      </div>
      <div className='grid grid-cols-3 place-items-center gap-y-10'>
        {
          cars.map((e, k) => (
            <CarItem
              key={k}
              name={e.name}
              aceleration={e.aceleration}
              handling={e.handling}
              overpower={e.overpower}
              speed={e.speed}
              weight={e.weight}
              img={e.img}
            />
          ))
        }
      </div>
    </div>
  )
}

export default NFTs
