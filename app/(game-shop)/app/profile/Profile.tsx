"use client"
import { TokenBalance } from '0xsequence/dist/declarations/src/indexer'
import { getTokensByAnyWallet } from '@/app/utils/sequence'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import NftCardV2 from '../components/NftCardV2'

const Profile = () => {
  const { address } = useAccount()
  const [tokens, setTokens] = useState<TokenBalance[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getTokens = async (address: string) => {
      const res = await getTokensByAnyWallet(address)

      const data = res.balances
      setTokens(data)
    }
    if (address) getTokens(address.toString())
    else setTokens([])

  }, [address])

  return (
    <div className='grid grid-cols-4 gap-8 max-w-screen-xl py-10'>
      {
        tokens.map((e, key) => (
          <NftCardV2
            key={key}
            name={e.tokenMetadata?.name ?? ''}
            tokenId={e.tokenMetadata?.tokenId ?? ''}
            image={e.tokenMetadata?.image ?? ''}
            price={e.tokenMetadata?.properties?.price}
            serie={e.tokenMetadata?.properties?.serie}
            balance={e.balance}
          />
        ))
      }
    </div>
  )
}

export default Profile
