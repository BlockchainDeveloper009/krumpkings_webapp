import '../styles/globals.css'
import type { AppProps } from 'next/app'


import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import AppShellExample from '../frontend/components/VetsAppShell';
import VetsAppShellLink from '../frontend/components/VetsAppShellLink';


import '@rainbow-me/rainbowkit/styles.css';
import {  createClient, configureChains, WagmiConfig, useAccount, useConnect, useEnsName, usePrepareContractWrite, useContractWrite, useWaitForTransaction, UseContractConfig, useContractRead  } from 'wagmi'
//WagmiConfig , 
import { InjectedConnector } from '@wagmi/core/connectors/injected'
import { mainnet, goerli  } from '@wagmi/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { polygon, polygonMumbai, hardhat, localhost } from '@wagmi/core/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { infuraProvider } from '@wagmi/core/providers/infura'
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton, getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';  
// import cabi from '../contract-abi.json';
// import cabi from '../rainbow-contract-abi';
import config from '../contractConfig.json';
import { useEffect, useState } from 'react';
import { IpfsImage } from 'react-ipfs-image';
import { BrowserRouter } from 'react-router-dom';
const yourAlchemyApiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ';
const contractConfig: UseContractConfig = {
  address: config.address,
  abi: [],
}

const { chains, provider, webSocketProvider } = configureChains(
  [polygon, goerli, polygonMumbai, localhost],
  [
    // priority =0, first rpc provider will be tried, after stallTimeout, will move to next RPC provider
    alchemyProvider({ apiKey: yourAlchemyApiKey, priority: 0, stallTimeout: 1_000 }), 

    infuraProvider({ apiKey: 'yourInfuraApiKey', priority: 1 }),
    publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'KrumpKings Web App',
  chains
});
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors
  
})
const demoAppInfo = {
  appName: 'RainbowKit Mint NFT Demo',
};

export default function App(props: AppProps) {
  const [imageHash, setImageHash] = useState('')
  const { Component, pageProps } = props;
  const { isConnected } = useAccount();
  // const { data: tokenURI } = useContractRead({
  //   address: '0x',
  //    abi: [],
    
  //   // functionName: 'baseTokenURI',

  // });
  let tokenURI=0;
  useEffect(() => {
    
    (async () => { 

      const gatewayUrl = tokenURI?.replace('ipfs://',
    'https://gateway.pinata.cloud/ipfs/');
 const json = await fetch(gatewayUrl).then((res)=> res.json());
 setImageHash(json.image);
    console.log(`tokenURI--> {$tokenURI}`+gatewayUrl)
    })

  },[tokenURI])
  
  return (
    <>
      <Head>
        <title>KrumpKings Nft Marketplace</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
       
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          fontFamily: 'Open Sans, sans-serif,Georgia serif',
          focusRing: 'auto' 

        }}
      >
        {/* <BrowserRouter> */}
        <WagmiConfig client={client}>
          <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        <Component {...pageProps} />
        <VetsAppShellLink/>
        <IpfsImage hash={imageHash}></IpfsImage>
        <p>You will have to pay </p>
        </RainbowKitProvider>
        </WagmiConfig>
        {/* </BrowserRouter> */}
      </MantineProvider>
    </>
  );
}