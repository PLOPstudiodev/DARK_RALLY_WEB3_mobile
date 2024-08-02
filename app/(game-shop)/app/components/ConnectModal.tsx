"use client"
import { useOpenConnectModal } from '@0xsequence/kit';
import { useAccount, useDisconnect } from 'wagmi';
import { IoWalletOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import TextWrapper from '@/app/components/TextWrapper';
import { MdOutlineLogin } from "react-icons/md";


const ConnectModal = () => {
  const { setOpenConnectModal } = useOpenConnectModal();

  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();

  const onClick = () => {
    setOpenConnectModal(true);
  };

  function shortenWalletAddress(address: `0x${string}` | undefined) {

    if (!address) return

    const firstPart = address.slice(0, 6);

    const lastPart = address.slice(-4);

    return `${firstPart}...${lastPart}`;
  }

  return (
    <div className='flex justify-end'>
      {isConnected ? (
        <TextWrapper>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4'>
              Connected to: <p className='bg-primary px-5 py-1 rounded-sm flex items-center gap-2'>
                <IoWalletOutline className='text-2xl' /> {shortenWalletAddress(address)}
              </p>
            </div>
            <button
              type='button'
              onClick={() => disconnect()}
              className='border border-primary px-5 py-1 rounded-sm flex items-center gap-2'
            > <IoExitOutline className='text-2xl' /> Disconnect
            </button>
          </div>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <button onClick={onClick} className='bg-primary px-5 py-4 rounded-sm flex items-center gap-2'>
            <MdOutlineLogin className='text-2xl' /> Connect
          </button>
        </TextWrapper>
      )}
    </div>
  );
};

export default ConnectModal;
