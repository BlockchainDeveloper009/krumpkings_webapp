
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IpfsImage } from 'react-ipfs-image';
import {Nft1Data, useNftDataGetterByAddressGet} from '../Hooks/getLegendsOfKrump.js';
import {legendsOfKrump_ownerAddress} from '../../srcConstants.js';
//
import { ethers} from 'ethers';

import {useNftDataGetterByAddressGetApi} from '../Hooks/getLegendsOfKrumpApi.js';
import { useAccount } from 'wagmi';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';

const imgHeight = 250
function RealitytvComp() {
    const router = useRouter();
    let i=0;
    let ownerAddr= legendsOfKrump_ownerAddress
    let nftdatas =useNftDataGetterByAddressGet(ownerAddr);
    console.log(nftdatas)
    console.log('nftsdatas--')
    const t: any = nftdatas.data
    console.log(t.filter((t1:any)=> { return t1.imageUrl!=undefined}))
    console.log('-------')

    // buy porocess
    //----------------------
   //workingS
    let fromaddr='0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5' //owner
    let toaddr='' //connected account
    let mintCost = ethers.utils.parseEther('0.02');
   let mintCostinWei = ethers.utils.formatEther(2000000000000000).toString();
    // let mintCostinWei = ethers.utils.formatEther(0.02);
  
    
      const [MintLoading,setMintLoading] = useState(false);
      const [mintSuccess, setMintSuccess] = useState(false);
      const [loctokenId, setLocTokenId] = useState('');
      const [dataarr,setDataArr] = useState([])
      const { address, connector, isConnected } = useAccount()
            function sendProps (m:Nft1Data) {
               
                let _tokenId = m.tokenId;
                console.log(`m.tokenId -- ${m.tokenId}`)
                console.log(`loc - ${loctokenId}`)
              router.push({
                pathname: "/BuyNftPage",
                query: {
                    _tokenId,
                    fromaddr,
                    toaddr,
                    MintLoading,
                    _tokenId,
                },
              });
            };

    //-------
    let a:any=[]
    const features = nftdatas.data?.filter((m:any)=>
    { return m.description == 'Battle for existence'}).map((m:any)=>
        
        (
            
            <Grid.Col span="auto" styles={{maxWdith: 150}} sm={3.5} xs={5} >
                <Card shadow="sm" p="lg" radius="md" withBorder >
                    <Card.Section>
                        <Image
                        src= {m.imageUrl}
                        // height={imgHeight}
                        alt="img not found"
                        />
                        {/* <IpfsImage hash='https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg'  height={imgHeight} alt='not'></IpfsImage> */}
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{m.title}</Text>
                 
                        <Badge color="red" variant="dark">
                        
                        0.02 ETH
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {m.description}
                    </Text>

                    <Button disabled= {!isConnected} variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=>sendProps(m)}>
                        Buy
                    </Button>
                </Card>

            </Grid.Col>
        ));
  return (
    <div className="App">
       
        <Grid justify="Center" >
        {features}
           
        </Grid>
        
    </div>
  );
} 

export default RealitytvComp;
