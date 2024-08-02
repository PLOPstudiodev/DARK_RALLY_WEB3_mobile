import React from 'react'
import Subtitle from '../Subtitle'
import Paragraph from '../Paragraph'
import { FaClock } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import TextWrapper from '../TextWrapper';

interface IMember {
  img: string
  name: string
  area: {
    name: string
    role: string
  }
  description: string
}

const Member: React.FC<IMember> = ({ area, description, img, name }) => (

  <div className='flex flex-col gap-4 font-bold'>
    <img src={`./images/team/${img}.png`} className='w-[380px] ' alt="" />
    <div>
      <TextWrapper><h3 className='text-[#e9a301]'> {name} </h3></TextWrapper>
      <span className='text-[#7f7a84] text-xs italic flex gap-3 mt-1'>
        <p className='flex gap-1 items-center'> <FaClock /> {area.name} </p> /
        <p className='flex gap-1 items-center'> <FaTag /> {area.role} </p> </span>
    </div>
    <p className='text-[#6c6c6c] text-[15px]'> {description} </p>
  </div>
)

const Team = () => {
  return (
    <div className='pb-[115px]'>
      <div className='flex flex-col items-center py-[115px]'>
        <Subtitle first="THE" second="TEAM" />
        <Paragraph>Any challenge demand guts, but after so many years we´ve learn that patient is the best ally, we give the best of us step by step.</Paragraph>
      </div>
      <div className='grid grid-cols-3'>
        <Member
          name='JORGE PUNTRIANO DURAN'
          area={{ name: 'Gaming', role: 'CEO' }}
          description='30 years in Design, Apps, Mkt and digital, 10 years in games, blockchain enthusiastic.'
          img='s_blog_thumb02'
        />
        <Member
          name='JOSE RAVINES'
          area={{ name: 'Finance', role: 'CFO' }}
          description='Transforming Business owners 🏬 into owners of their Profitability 💲 Founder partner at Blockchain Association of Peru.'
          img='s_blog_thumb03'
        />
        <Member
          name='PIERRE SALAZAR'
          area={{ name: 'Senior Concept Art', role: 'Invited Artist' }}
          description='Walking with dinosaurs, Legends of the Guardians, Happy Feet, Lego Movie, among other succesfull Hollywood titles. 💲'
          img='s_blog_thumb04'
        />
      </div>
    </div>
  )
}

export default Team
