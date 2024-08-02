"use client"
import { KitConfig, KitProvider, getKitConnectWallets } from '@0xsequence/kit'
import {
  google,
  facebook,
  twitch,
  apple,
  sequence,
  email,
  metamask,
  walletConnect,
  coinbaseWallet,
} from '@0xsequence/kit-connectors'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { HttpTransport } from 'viem'
import { createConfig, createStorage, http, noopStorage, WagmiConfig, WagmiProvider } from 'wagmi'
import { polygon, Chain, mainnet } from 'wagmi/chains'

import { ReactNode } from 'react'

const queryClient = new QueryClient()

const WagmiWrapper = ({children}:{children:ReactNode}) => {

  const projectAccessKey = "AQAAAAAAAIviT1Pqf4WTIckPs5p4Lbr-w4I"
  const chains = [mainnet, polygon,] as [Chain, ...Chain[]]

  const connectors = getKitConnectWallets(projectAccessKey, [
    google({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    facebook({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    twitch({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    apple({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    email({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    email({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    sequence({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    email({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    }),
    metamask(),
    walletConnect({
      projectId: 'c65a6cb1aa83c4e24500130f23a437d8'
    }),
    coinbaseWallet({
      appName: "Test DarkRally"
    }),
    email({
      defaultNetwork: 137,
      connect: {
        app: "Test DarkRally"
      }
    })
  ])

  const transports: { [index: number]: HttpTransport } = {}

  chains.forEach(chain => {
    transports[chain.id] = http()
  })

  const wagmiConfig = createConfig({
    transports,
    connectors,
    chains,
    ssr: true
  })

  const kitConfig: KitConfig = {
    projectAccessKey,
    position: 'center',
    defaultTheme: 'dark',
    signIn: {
      projectName: 'Test DarkRally',
      showEmailInput: true,
      socialAuthOptions: ['google', 'facebook', 'twitch', 'apple', 'google-waas', 'apple-waas'],
      walletAuthOptions: ['sequence', 'sequence-waas', 'metamask', 'wallet-connect', 'coinbase-wallet']
    }
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
          {children}
        </KitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default WagmiWrapper