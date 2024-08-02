"use client"
import Hero from "../components/sections/Hero";
import GameMode from "../components/sections/GameMode";
import Information from "../components/sections/Information";
import NFTs from "../components/sections/NFTs";
import Team from "../components/sections/Team";
import { useState } from "react";

/* 
bg-[url('/images/slider/slider_bg.jpg')]
bg-[url('/images/slider/slider_bg02.jpg')]
*/

export default function Home() {

  const [currentBg, setCurrentBg] = useState<string>('slider_bg')

  const background = `bg-[url('/images/slider/${currentBg}.jpg')]`

  return (
    <main className="w-full bg-[#0a0909]">
      <div className={`flex flex-col items-center ${background} bg-cover h-screen relative`} >
        <img src="./images/slider/slider_img01.png" className='absolute bottom-0 right-[10%] z-[1]' alt="" />
        <img src="./images/slider/slider_img02.png" className='absolute bottom-0 right-[18%]' alt="" />
        <div className="max-w-screen-xl w-full">
          <Hero setCurrentBg={setCurrentBg}/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#f6f6f6]">
        <div className="max-w-screen-xl w-full">
          <GameMode></GameMode>
        </div>
      </div>

      <div className={`flex flex-col items-center bg-[url('/images/information/just_gamer_bg.jpg')] bg-cover relative`} >
        <img src="./images/information/gamers_bg_conve01.png" className='absolute top-0' alt="" />
        <div className="max-w-screen-xl w-full">
          <Information></Information>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className='max-w-screen-xl w-full'>
          <NFTs></NFTs>
          <Team></Team>
        </div>
      </div>
    </main>
  );
}
