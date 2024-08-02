import WagmiWrapper from '@/app/(game-shop)/app/components/WagmiWrapper'
import App from './components/App'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <WagmiWrapper>
      <App />
      <Toaster position='top-center'/>
    </WagmiWrapper>
  )
}

export default page
