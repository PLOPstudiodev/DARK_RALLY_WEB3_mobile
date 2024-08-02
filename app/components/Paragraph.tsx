import React, { ReactNode } from 'react'

const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <p className='text-[#6c6c6c] font-semibold text-[15px] w-[60ch] text-center leading-7 mt-4'> {children} </p>
  )
}

export default Paragraph
