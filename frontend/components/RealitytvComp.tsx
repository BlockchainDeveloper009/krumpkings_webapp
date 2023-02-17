
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IpfsImage } from 'react-ipfs-image';
import {useNftDataGetterByAddressGet} from '../Hooks/getLegendsOfKrump.js';
//
import { ethers} from 'ethers';

import {useNftDataGetterByAddressGetApi} from '../Hooks/getLegendsOfKrumpApi.js';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';

const imgHeight = 250
function RealitytvComp() {
    const router = useRouter();
    let i=0;
    let ownerAddr= '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5'
    let nftdatas =useNftDataGetterByAddressGet(ownerAddr);
    console.log(nftdatas)
    console.log('nftsdatas--')
    const t: any = nftdatas.data
    console.log(t.filter((t1:any)=> { return t1}))
    console.log('-------')

    // buy porocess
    //----------------------
    let _tokenId=6; //workingS
    let fromaddr='0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5' //owner
    let toaddr='' //connected account
    let mintCost = ethers.utils.parseEther('0.02');
   let mintCostinWei = ethers.utils.formatEther(2000000000000000).toString();
    // let mintCostinWei = ethers.utils.formatEther(0.02);
  
    
      const [MintLoading,setMintLoading] = useState(false);
      const [mintSuccess, setMintSuccess] = useState(false);
      const [tokenid, setTokenId] = useState('');
     
        
            function sendProps () {
              router.push({
                pathname: "/BuyNftPage",
                query: {
                    _tokenId,
                    fromaddr,
                    toaddr,

                },
              });
            };

    //-------
    const features = nftdatas.data?.filter((m:any)=>{ return m.description == 'Battle for existence'}).map((m:any)=>
        
        (
                
            <Grid.Col span="auto" styles={{maxWdith: 150}} sm={3.5} xs={5} >
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
                        
                        0.02 ETH
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {m.description}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=>sendProps()}>
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
