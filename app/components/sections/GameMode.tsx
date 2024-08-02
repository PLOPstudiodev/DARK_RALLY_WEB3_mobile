import { gamesModes } from "@/app/constants/gameModes";
import { Oxanium } from "next/font/google";
import Subtitle from "../Subtitle";
import TextWrapper from "../TextWrapper";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface IModeItem {
  tag: string
  title: {
    primary: string
    secondary: string
  }
  features: {
    earnings: string
    model: string
    levels: string
  }
  description: string
  buttonLabel: string
}

const ModeItem: React.FC<IModeItem> = ({ tag, title, features, description, buttonLabel }) => {

  return (
    <div className='flex flex-col justify-center gap-5 px-8 py-2 col-span-3 font-bold text-terciary'>
      <h4 className='uppercase'> {tag} </h4>
      <div className=''>
        {/* <img src='./images/gameModes/released_game_brush.png' alt="" /> */}
        <h5 className='text-xl beforeBg relative z-[1] leading-[50px]'> {title.primary} <span className='text-white'> {title.secondary} </span></h5>
      </div>
      <div className='text-sm flex flex-col gap-4'>
        <p className='font-semibold'> Earnings: <span className='pl-3 text-gray-500'> {features.earnings}</span> </p>
        <p className='font-semibold'> Model:    <span className='pl-3 text-gray-500'>{features.model}</span> </p>
        <p className='font-semibold'> Levels:   <span className='pl-3 text-gray-500'>{features.levels}</span> </p>
      </div>
      <p className='text-sm font-semibold text-gray-500'> {description} </p>
      <TextWrapper><a href="#" target='_blank' className='cLink bg-primary text-sm font-bold mt-4'> <span>{buttonLabel}</span> </a></TextWrapper>
    </div>
  )
}

const GameMode = () => {

  const [gmIndex, setGmIndex] = useState(0)
  const [triggerAnimation, setTriggerAnimation] = useState(false)

  const currentGm = gamesModes[gmIndex]

  const showAnimation = () => {

    setTriggerAnimation(true)
    setTimeout(() => setTriggerAnimation(false), 500);
  }


  return (
    <section className='py-[115px]'>
      <div className="flex flex-col items-center gap-2">
        <Subtitle first="GAMES" second="MODE" />

        <p className="text-sm text-gray-500 font-semibold">What´s next: Play, Compete, Earn and trace your own path to the glory.</p>
        <img className="mt-5 mb-14" src="./images/gameModes/title_bar02.png" alt="" />
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <section className='col-span-2 grid grid-cols-5 place-content-center px-6 relative bg-white'>
          <div className="w-full h-full bg-[url(/images/gameModes/released_slide_bg.jpg)] absolute top-0 right-0 bg-right opacity-5"></div>

          <div className="col-span-2 relative z-[2]">
            <div className="relative w-fit">
              <img
                className={`${triggerAnimation ? 'fadeIn ' : null}`}
                src={currentGm.img}
                alt={currentGm.title.primary + currentGm.title.secondary} />
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 grid grid-cols-4 gap-3">
                {gamesModes.map((e, k) => (
                  <div key={k}
                    onClick={() => {
                      setGmIndex(k)
                      showAnimation()
                    }}
                    className={`cursor-pointer w-5 h-5 border ${k === gmIndex ? 'border-primary' : 'border-none'} rounded-full flex justify-center items-center`} >
                    <div className={`w-2 h-2 ${k === gmIndex ? 'bg-primary' : 'bg-white'} rounded-full`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ModeItem
            tag='Sponsor Mode'
            title={{
              primary: currentGm.title.primary,
              secondary: currentGm.title.secondary
            }}
            features={{
              earnings: currentGm.features.earnings,
              model: currentGm.features.model,
              levels: currentGm.features.levels
            }}
            description={currentGm.description}
            buttonLabel={currentGm.buttonLabel}
          />
        </section>
        <section className='col-span-1 grid grid-rows-3 gap-5'>
          <img src="./images/gameModes/release_game_nav02.jpg" alt="" />
          <img src="./images/gameModes/release_game_nav01.jpg" alt="" />
          <img src="./images/gameModes/release_game_nav04.jpg" alt="" />
        </section>
      </div>
    </section>
  )
}

export default GameMode
