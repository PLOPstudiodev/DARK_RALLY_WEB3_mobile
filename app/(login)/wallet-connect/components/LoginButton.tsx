"use client"
import { useOpenConnectModal } from '@0xsequence/kit';
import React, { useEffect } from 'react'
import { useAccount } from 'wagmi';

const unityAppLink = 'deep-link://open'

const LoginButton = () => {

  const { setOpenConnectModal } = useOpenConnectModal();

  const { isConnected, address } = useAccount();

  const onClick = () => {
    setOpenConnectModal(true);
  };

  useEffect(() => {

    if (isConnected) {
      window.location.href = `${unityAppLink}?address=${address}`;
    }

  }, [isConnected])


  return (
    <button
      onClick={onClick}
      className='bg-primary px-5 py-1 rounded-sm'>
      CONTINUE
    </button>
  )
}

export default LoginButton
