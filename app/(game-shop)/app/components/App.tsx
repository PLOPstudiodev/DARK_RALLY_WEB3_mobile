import React from 'react'
import Tab from '@/app/(game-shop)/app/components/Tab'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ConnectionButton = dynamic(() => import('./ConnectModal'), { ssr: false })

const App = async () => {

  return (
    <section className="bg-[url('/images/shop/header.png')] flex justify-center pt-10">
      <div className='max-w-screen-xl w-full'>
        <div className='grid grid-cols-6 items-center'>
          <div className='col-span-1'>
            <Link href={'/'}>
              <img src="/images/logo.png" alt="" className='w-[100px]' />
            </Link>
          </div>
          <div className='col-span-2'>
            <Link href={'#'} className='border-b border-gray-400 text-gray-200' >DarkRallyNFT</Link>
          </div>
          <div className='text-white col-span-3'>
            <ConnectionButton />
          </div>
        </div>
        <div className='flex w-full justify-center'>
          <Tab link='/app/profile' name='PLAYER PROFILE'></Tab>
          <Tab link='/app/shop' name='SHOP'></Tab>
          <Tab link='/app/tournament-inscription' name='REGISTER FOR THE TOURNAMENT'></Tab>
          <Tab link='/app/play' name='PLAY WITH NFT VEHICLE'></Tab>
        </div>
      </div>
    </section>
  )
}

export default App
