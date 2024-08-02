import React, { useState } from 'react'
import { getCollectibles } from '@/app/utils/sequence';
import NFTCard from '../../components/NftCard';
import { ICollectible } from '../../types/shop.types';

const page = async () => {

  const { tokens } = await getCollectibles(522)

  const data: ICollectible[] = tokens

  return (
    <>
      {
        data.map((e, key) => (
          <NFTCard
            key={key}
            name={e.name}
            tokenId={e.tokenId}
            image={e.image}
            price={e.properties.price}
            serie={e.properties.serie}
            supply={300}
          />
        ))
      }
    </>
  )
}

export default page
