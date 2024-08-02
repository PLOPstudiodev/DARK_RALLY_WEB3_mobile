declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_CHAIN_ID: number;
      NEXT_PUBLIC_NFT_CONTRACT_ADDRESS: string;
      NEXT_PUBLIC_SHOP_COIN_CONTRACT_ADDRESS: string;
      NEXT_PUBLIC_SIGNER: string;
      NEXT_PUBLIC_PROJECT_ACCESS_KEY: string;
      NEXT_PUBLIC_AUTHORIZATION_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}