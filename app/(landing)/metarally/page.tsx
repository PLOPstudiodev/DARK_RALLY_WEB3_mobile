import TextWrapper from '@/app/components/TextWrapper'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="flex justify-center bg-[url('/images/metarally/breadcrumb_bg.jpg')] pt-headerHeight">
        <div className='max-w-screen-xl py-20'>
          <div className='flex gap-10'>
            <img src="./images/metarally/game_overview_thumb.gif" alt="" />
            <div className='text-white font-bold text-sm flex flex-col justify-between'>
              <TextWrapper> <h2 className='text-[70px] leading-[1] text-white'>NF<span className='text-fifth-100'>TOYS</span></h2></TextWrapper>
              <p>Non Fungible Toys, <br />
                Unique virtual creations of real celebrities, made by real senior artists.
              </p>
              <div>
                <h3>ANIBAL ALIAGA</h3>
                <p className='text-fifth-100'>Dakar Rally Champion 2018 / Stage 2/ Time: 01:34:21</p>
                <p className='text-fifth-100'>Cross Country Peru Championship 2022, 1st position.</p>
              </div>
              <div>
                <h3>PIERRE SALAZAR</h3>
                <p className='text-fifth-100'>Senior 3D ARTIST / Walking with dinosaurs, Happy Feet.</p>
                <p className='text-fifth-100'>Sucker Punch, Lego movie.</p>
              </div>
              <div>
                <h3>STOCK</h3>
                <p className='text-fifth-100'>1,000 units / Promo Ending: January 30th 2023</p>
              </div>

              <Link href={'#'} className='cLink bg-primary text-[15px] mt-8'><span className='py-2 px-7'>GET IT NOW</span></Link>

            </div>
          </div>
        </div>
      </section>
      <section className='bg-fourth flex justify-center pt-[115px]'>
        <div className='max-w-screen-xl bg-white p-10'>
          <div>
            <TextWrapper>
              <span className='text-fifth-200 text-xs'>JUNE 30, 2022</span>
              <h2 className='text-2xl mt-2'>WELCOME TO <br />
                <span>DARK RALLY X</span>
              </h2>
            </TextWrapper>
            <div className='text-sm font-semibold'>
              <h3 className='my-5'>PLAN OVERVIEW</h3>
              <p className='text-secondary leading-7 font-medium mb-10'>Dark Rally will be built on the Polygon blockchain to take advantage of the low cost of transactions, speed of operation, adoption and reputation of the Polygon Blockchain.Given that blockchain operations involve a stop gaming to sign requests and wait for a response, the model that Dark Rally will use is the combination of a synthetic token that works internally in the game and that allows coins to be obtained or discounted without interrupting the player&apos;s experience, with an ERC-777 token on the Polygon Blockchain. Players who obtain Synthetic Dark Coin will be able to make the switch to Dark Coin Blockchain (ERC-777) through a web3 interface. </p>
            </div>
          </div>

          <div>
            <TextWrapper>
              <h2 className='text-2xl mt-2'>PAPER OVERVIEW</h2>
            </TextWrapper>
            <div className='text-sm text-secondary'>
              <p className='leading-7 font-medium border-b-[1px] py-4 border-[#e6e5e4]'> <b className='text-base text-fourth'>NFT VEHICLES :</b><br /> For vehicles and other NFT assets we will use the ERC-721 standard, players will be able to purchase their vehicles through a web3 interface with their Metamask wallet, Dark Rally will detect the NFTs that players own and give them a playable representation of the asset within the play.</p>
              <p className='leading-7 font-medium border-b-[1px] py-4 border-[#e6e5e4]'> <b className='text-base text-fourth'>SMART CONTRACTS :</b><br /> To migrate DarkCoin to web3 it is estimated that around 23 smart contracts will be needed, among the most important, the Dark Coin token, vesting, public sale, swap, nft, maps, workshops, NFT Sale, tokenomics, rewards, etc. To develop it, a team of 2 senior Solidity developers, a senior smart contract security professional and a leading Blockchain EVM expert will be formed.</p>
              <p className='leading-7 font-medium border-b-[1px] py-4 border-[#e6e5e4]'> <b className='text-base text-fourth'>ROADMAP :</b> <br />
                Q1 2023 - Token Presale <br />
                Q2 2023 - Marketplace NFT<br />
                Q3 2023 - Soft launch<br />
                Q4 2023 - Global Launching Q1 - Main event / Global Competitions
              </p>
              <p className='leading-7 font-medium border-b-[1px] py-4 border-[#e6e5e4]'> <b className='text-fourth text-base'>GLOBAL TOURNAMENT:</b> Periodic Global Tournaments with big rewards will be given during first lauh stages.</p>

              <p className='my-10'>The openings for Genesis and funraisers will be open since the begining till before beta release.</p>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-2 gap-x-10'>
              <div>
                <TextWrapper>
                  <h2 className='text-2xl mt-2'>TOKENOMICS</h2>
                </TextWrapper>
                <p className='text-secondary text-sm font-medium my-5'>The Tokenomic system will be provided soon.</p>
                <div className='grid grid-cols-5 py-4 border-y-[1px] border-[#e6e5e4]'>
                  <img src="./images/metarally/overview_history_thumb01.jpg" alt="" />
                  <div className='flex flex-col pl-8 justify-center col-span-2'>
                    <TextWrapper>
                      <p className='text-lg'>NFT GENESIS GOAL</p>
                    </TextWrapper>
                    <p className='text-secondary text-sm'>Q1, 2023</p>
                  </div>
                  <div className='border-l-[1px] text-xl pl-4 col-span-1 border-[#e6e5e4] flex items-center text-fifth-100'>
                    <TextWrapper>$30,000</TextWrapper>
                  </div>
                </div>
              </div>
              <img src="./images/metarally/overview_history_img.jpg" alt="" />
            </div>
          </div>
          <p className='text-secondary text-sm leading-7 mt-5'>DARK RALLY X, No Fear - No Game. <br />
          No compass, no maps, no help at all, join the community of braves. Get ready for the most challeging NFT video game, a play to earn game with tons of adrenaline!</p>
        </div>
      </section>
    </>
  )
}

export default page
