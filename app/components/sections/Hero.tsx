"use client"
import { sliders } from '@/app/constants/hero';
import Slider from './Hero/Slider';
import { Dispatch, SetStateAction, useState } from 'react';

const Hero = ({ setCurrentBg }: { setCurrentBg: Dispatch<SetStateAction<string>> }) => {

  const [sliderIndex, setSliderIndex] = useState(0)

  const nextSlider = () => {
    if (sliderIndex >= sliders.length - 1) {
      setSliderIndex(0)
      setCurrentBg(sliders[0].img)
    }
    else {
      setSliderIndex(sliderIndex + 1)
      setCurrentBg(sliders[sliderIndex + 1].img)
    }
  }

  const previousSlider = () => {
    if (sliderIndex <= 0) {
      setSliderIndex(sliders.length - 1)
      setCurrentBg(sliders[sliders.length - 1].img)
    }
    else {
      setSliderIndex(sliderIndex - 1)
      setCurrentBg(sliders[sliderIndex - 1].img)

    }
  }

  const currentSlider = sliders[sliderIndex]

  return (
    <section className='pt-headerHeight relative'>
      <div className='grid grid-cols-3 mt-12 relative h-[470px]'>
        <button
          type='button'
          className='absolute top-1/2 -translate-y-1/2 -left-[10%] z-10 '>
          <img
            onClick={previousSlider}
            src="./images/slider/arrow_left.png" alt="" />
        </button>
        <button
          type='button'
          className='absolute top-1/2 -translate-y-1/2 -right-[10%] z-10 '>
          <img
            onClick={nextSlider}
            src="./images/slider/arrow_right.png" alt="" />
        </button>
        <Slider
          tag={currentSlider.tag}
          title={{
            primary: currentSlider.title.primary,
            secondary: currentSlider.title.secondary,
            terciary: currentSlider.title.terciary
          }}
          description={currentSlider.description}
          buttonLabel={currentSlider.buttonLabel}
        />
      </div>
    </section >
  )
}

export default Hero
