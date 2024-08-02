import { Oxanium } from "next/font/google";
import TextWrapper from "../../TextWrapper";

const oxanium = Oxanium({ subsets: ["latin"], weight: '800' });

interface ISlider {
  tag: string
  title: {
    primary: string
    secondary: string
    terciary: string
  }
  description: string
  buttonLabel: string
}

const Slider: React.FC<ISlider> = ({ tag, title, description, buttonLabel }) => {
  return (
    <div className="col-span-2 flex flex-col gap-4">
      <div>
        <span className='text-secondary text-[22px] font-bold leading-[2]'> {tag} </span>
        <h2 className={`${oxanium.className} text-secondary text-[90px] leading-[1] font-extrabold`}> {title.primary} <span className='text-white'> {title.secondary} </span> <span> {title.terciary} </span> </h2>
      </div>
      <p className="text-white w-[60ch] leading-8 font-extralight"> {description} </p>
      <TextWrapper><a href="#" target='_blank' className='cLink bg-primary font-semibold mt-10'> <span>{buttonLabel}</span> </a></TextWrapper>
    </div>
  )
}

export default Slider
