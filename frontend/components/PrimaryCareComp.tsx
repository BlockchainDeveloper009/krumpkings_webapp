
import { Box, Button, Loader, MantineProvider, Paper, ScrollArea, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ethers} from 'ethers';
import {legendsOfKrump_CONTRACT_ADDRESS,legendsOfKrump_CONTRACT_ABI} from '../../srcConstants.js';
import {  createClient, configureChains, WagmiConfig, useAccount, useConnect, useEnsName, usePrepareContractWrite, useContractWrite, useWaitForTransaction  } from 'wagmi'
//import { createStylesServer, ServerStyles } from '@mantine/ssr';
import {useNftDataGetterByAddressGet} from '../Hooks/getLegendsOfKrump.js';

function PrimaryCareComp(props:any) {
    const router = useRouter();
    const viewport = useRef<HTMLDivElement>(null);
    const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: 'smooth' });
    let _tokenId=6; //workingS
    let mintCost = ethers.utils.parseEther('0.02');
   let mintCostinWei = ethers.utils.formatEther(2000000000000000).toString();
    // let mintCostinWei = ethers.utils.formatEther(0.02);
    console.log('-->'+legendsOfKrump_CONTRACT_ADDRESS)
    console.log(legendsOfKrump_CONTRACT_ABI)
    const { 
        config,
        error: prepareError,
        isError: isPrepareError, }  = usePrepareContractWrite({
        address: legendsOfKrump_CONTRACT_ADDRESS,
        abi: legendsOfKrump_CONTRACT_ABI,
        functionName: 'mint',
        args: [_tokenId, {value: mintCost?.toString()}],
        // enabled: Boolean(assetId),
        // overrides: {
        //     from: 'address',
        //     value: ethers.utils.parseEther('0.01'),
        //   },
      });
      const { data, write , error, isError, writeAsync, isLoading: mintLoading, } = useContractWrite(config)
      console.log('--')

      console.log('-------')
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })
      const [MintLoading,setMintLoading] = useState(false);
      const [mintSuccess, setMintSuccess] = useState(false);
      async function  onMintClick(){
            try{
            const tx = await writeAsync?.();
         const res = await tx?.wait();
         setMintSuccess(true);
        }catch(error){
                console.error(error);
            } finally{
                setMintLoading(false);
            }

  }
  let ownerAddr= '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5'
  let nftdatas =useNftDataGetterByAddressGet(ownerAddr);
  const features = nftdatas.data?.filter((m:any)=>{ return m.description == 'Battle for existence'}).map((m:any)=>
        
  (
          
      <Grid.Col key ={m.tokenid} span="auto" styles={{maxWdith: 150}} sm={3.5} xs={5} >
          <Card shadow="sm" p="lg" radius="md" withBorder >
              <Card.Section>
                  <Image
                  src= {m.imageUrl}
                  // height={imgHeight}
                  alt="Norway"
                  />
                  {/* <IpfsImage hash='https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg'  height={imgHeight} alt='not'></IpfsImage> */}
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{m.title}</Text>
           
                  <Badge color="red" variant="dark">
                  
                  {mintCostinWei.toString()}
                  </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                  {m.description}
              </Text>

              <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                    disabled={mintLoading}
                     onClick={onMintClick}>
                        Mint
                    </Button>
          </Card>

      </Grid.Col>
  ));
  
  return (
    <div className="App">
        
        <Grid justify="Center">
        {features}
        </Grid>
        
    </div>      
  );
} 

export default PrimaryCareComp;
