import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-fourth flex justify-center py-5 text-gray-400 text-sm'>
      <div className='max-w-screen-xl w-full flex items-center justify-between'>
      <p>Copyright © 2022 Dark Rally X All Rights Reserved.</p>
      <img 
      className='w-[180px]'
      src="./images/enchart_studio_logo.png"  
      alt="Enchart Studio Logo" />
      </div>
    </footer>
  )
}

export default Footer
