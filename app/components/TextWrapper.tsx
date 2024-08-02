import { Oxanium } from "next/font/google";
import { ReactNode } from "react";

const oxanium = Oxanium({ subsets: ["latin"], weight: '800' });

const TextWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className={`${oxanium.className} w-fit`}> {children} </div>

  )
}

export default TextWrapper
