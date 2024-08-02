import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ subsets: ["latin"], weight: '800' });

const Subtitle = ({ first, second }: { first:string, second:string }) => {
  return (
      <h2 className={`${oxanium.className} w-fit text-4xl uppercase text-primary`}>{first} <span className='text-secondary'>{second}</span> </h2>
  )
}

export default Subtitle
