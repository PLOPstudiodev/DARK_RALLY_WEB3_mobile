import React from 'react'
import { INftCard } from '../types/shop.types';


const NftCardV2: React.FC<INftCard> = ({ name, tokenId, serie, image, balance }) => {

  return (
    <div className='p-4 flex flex-col gap-4 rounded-md bg-[#ffffff1a] h-fit'>
      <img src={image} alt={name} className='rounded-md' />
      <div>
        <p className='text-white text-lg'> {serie} </p>
        <p className='uppercase text-[#ffffff66] text-xs'> {name} #{tokenId} </p>
      </div>
      <div className='text-xl flex justify-between items-end font-black'>
        <p className='text-xs text-gray-300'>Units: {balance} </p>
      </div>
    </div>
  )
}

export default NftCardV2
