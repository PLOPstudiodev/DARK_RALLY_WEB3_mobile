"use client"
import { KitCheckoutProvider } from "@0xsequence/kit-checkout";
import Filters from "./_components/Filters";
import { Toaster } from "react-hot-toast";


export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <KitCheckoutProvider>
      <div className="flex flex-col items-center py-10 w-full">
        <Toaster position='top-center' />
        <Filters />
        <div className='max-w-screen-xl w-full pt-10 flex flex-col'>
          <div className='grid grid-cols-4 gap-8'>
            {children}
          </div>
        </div>
      </div>
    </KitCheckoutProvider>
  )
}
