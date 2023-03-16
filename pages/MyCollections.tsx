import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import { useAccount } from 'wagmi';
import Cards from '../frontend/components/Cards';
import {useNftDataGetterByAddressGet} from '../frontend/Hooks/getLegendsOfKrump.js';
import {legendsOfKrump_ownerAddress} from '../srcConstants.js';


import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';

function MyCollections() {
  const pageHeader ='My Collections page'
  const noImages = "No Images"
  const { address, connector, isConnected } = useAccount()
 
  console.log(`address: ${address}`)
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })

   
    const nftdatas = useNftDataGetterByAddressGet(address)
    console.log('testnft dadtas')
    console.log(nftdatas)
    console.log('completed')
    const t: any = nftdatas.data
    console.log(t.filter((t1:any)=> { return t1}))
    console.log('-------')

    const features = nftdatas.data.length == 0 ? <Title order={1}>{noImages}</Title> :
    nftdatas.data?.filter((m:any)=>{ return m.description == 'Battle for existence'}).map((m:any)=>
        
    (
            
        <Grid.Col key = {m.tokenId} span="auto" styles={{maxWdith: 150}} sm={3.5} xs={5} >
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
             
                    <Badge color="red" variant="dot">
                    
                    0.02 ETH
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                    {m.description}
                </Text>

                {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                 onClick={()=>sendProps()}>
                    Buy
                </Button> */}
            </Card>

        </Grid.Col>
    ));
  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {pageHeader}</Title>
      <Title order={1}>  {pageHeader}</Title>
       
        <Grid justify="Center" >

        { features}
           
        </Grid>
         <Title order={1}>  {pageHeader}</Title>
       <Title order={1}>  {pageHeader}</Title>
        <Title order={1}>  {pageHeader}</Title>
        </Box>
    </div>
  );
}

export default MyCollections;

