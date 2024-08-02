"use client"
import React, { useState } from 'react'
import { LuMinus } from "react-icons/lu";
import { GoPlus, } from "react-icons/go";
import { mintCollectible } from '@/app/utils/sequence';
import { INftCard } from '../types/shop.types';
import { useAccount, useSendTransaction } from 'wagmi';
import { CheckoutSettings, useCheckoutModal } from '@0xsequence/kit-checkout';
import { CHAIN_ID, NFT_CONTRACT_ADDRESS, SHOP_COIN_CONTRACT_ADDRESS } from '@/app/constants/env';
import { toast, Toaster } from 'react-hot-toast'
import Spinner from '@/app/components/Spinner';
import TextWrapper from '@/app/components/TextWrapper';

const NFTCard: React.FC<INftCard> = ({ name, tokenId, price, serie, image, categorie, supply }) => {

  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const { triggerCheckout } = useCheckoutModal()
  const { address } = useAccount();
  const { sendTransactionAsync } = useSendTransaction()

  const onMinusClick = () => {
    setQuantity((prev: number) => {
      if (prev - 1 === 0) return prev;
      return prev - 1;
    })
  }

  const onPlusClick = () => {
    setQuantity((prev: number) => {
      if (prev + 1 === supply) return prev;
      return prev + 1;
    })
  }

  /* const onMintHandler = () => {
    toast.custom(
      <div className='bg-primary text-white py-2 px-8 rounded-md'>
        Successful
      </div>
    )
  } */

  const onMintHandler = () => {

    if (address === undefined) {
      return
    }

    const parsedPrice = '0';

    const checkoutConfig: CheckoutSettings = {
      cryptoCheckout: {
        chainId: CHAIN_ID,
        triggerTransaction: async () => {
          try {
            setIsLoading(true);
            await sendTransactionAsync(
              {
                to: address,
                value: BigInt(price),
                gas: null,
              },
              {
                onSettled: result => {
                  if (result) console.log('result: ', result)
                }
              }
            )
            await mintCollectible(address, tokenId, quantity)
          } catch (error) {
            toast.error('Something went wrong, try again.')
          } finally {
            toast.custom(
              <div className='bg-primary text-white py-2 px-8 rounded-md'>
                <TextWrapper>Successful</TextWrapper>
              </div>
            )
            setIsLoading(false)
          }
        },
        coinQuantity: {
          contractAddress: SHOP_COIN_CONTRACT_ADDRESS,
          amountRequiredRaw: parsedPrice
        },
      },
      orderSummaryItems: [
        {
          chainId: CHAIN_ID,
          contractAddress: NFT_CONTRACT_ADDRESS,
          tokenId: tokenId,
          quantityRaw: quantity.toString()
        },
      ]
    }

    triggerCheckout(checkoutConfig);
  }

  return (
    <div className='p-4 flex flex-col gap-4 rounded-md bg-[#ffffff1a] h-fit'>
      <img src={image} alt={name} className='rounded-md' />

      <div>
        <p className='text-white text-lg'> {serie} </p>
        <p className='uppercase text-[#ffffff66] text-xs'> {name} #{tokenId} </p>
      </div>
      <div className='text-xl flex justify-between items-end font-black'>
        <p className='text-xs text-gray-300'>Available: {supply} </p>
        <p className='text-gradient uppercase'>{price} USD</p>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='bg-[#ffffff1a] rounded-md flex justify-between p-2 pl-4'>
          <input
            type="number"
            value={quantity}
            readOnly
            className='w-full bg-transparent rounded-md outline-none text-white'
            min={0}
            max={supply} />
          <div className='text-xl flex items-center gap-4 text-white'>
            <button
              type='button'
              onClick={onMinusClick}
              className='rounded-md hover:bg-gray-500'
            >
              <LuMinus></LuMinus>
            </button>
            <button
              type='button'
              onClick={onPlusClick}
              className='rounded-md hover:bg-gray-500'
            >
              <GoPlus></GoPlus>
            </button>
          </div>
        </div>
        <button
          type='button'
          onClick={onMintHandler}
          className='bg-gradient-to-r rounded-md from-[#FB8A00] from-[-30%] to-[#FF3016] to-70% px-4 py-2 text-white font-bold flex justify-center'
        >
          {
            isLoading ? <Spinner /> : "Mint"
          }
        </button>
      </form>
    </div>
  )
}

export default NFTCard
