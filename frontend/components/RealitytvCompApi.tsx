
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IpfsImage } from 'react-ipfs-image';
import {useNftDataGetterByAddressGet} from '../Hooks/getLegendsOfKrump.js';
//
import {useNftDataGetterByAddressGetApi} from '../Hooks/getLegendsOfKrumpApi.js';
//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Orthopedic Surgery','Laparoscopic Surgery']
const GridDesc= [
    'Orthopedic surgery can help pets who suffer from joint problems, torn ligaments, broken bones, and even help correct congenital problems.',
    'Also known as “bandaid surgery” or “keyhole surgery”, laparoscopic surgery is a less invasive method of surgery.',
   
]
const GridImages= [ 
    "/images/Spay1.PNG", 
    "/images/SoftTissue1.PNG", 
    ]
    const mockdata = [
        {
            title: 'KrumpKings-set16-8',
            imageUrl: 'https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg',
            description: 'Battle for existence',
            price: '0.02',
            tokenId: '0',
            name: 'KrumpKings-set16-8',
            attributes: undefined,
            balance: 1,
            timelastUpdate: '2023-02-15T02:48:27.220Z',
            error: undefined
          },
           {
            title: '',
            imageUrl: 'https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg',
            description: '',
            price: '0.02',
            tokenId: '6',
            name: undefined,
            attributes: undefined,
            balance: 1,
            timelastUpdate: '2023-02-15T03:15:55.069Z',
            error: 'Malformed token uri, do not retry'
          },
           {
            title: '',
            imageUrl: 'undefined',
            description: '',
            price: '0.02',
            tokenId: '0',
            name: undefined,
            attributes: undefined,
            balance: 1,
            timelastUpdate: '2023-02-15T03:15:55.068Z',
            error: 'Malformed token uri, do not retry'
          }
      ];

const imgHeight = 250
function RealitytvCompApi() {
  const callAPI = async () => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/1`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
  
    let ownerAddr= '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5'
    let nftdatas =useNftDataGetterByAddressGet(ownerAddr);
    // const features = nftdatas?.filter((m:any)=>{ return m.error==undefined}).map((m:any)=>
        
    //     (
                
    //         <Grid.Col span="auto" styles={{maxWdith: 150}} sm={3.5} xs={5} >
    //             <Card shadow="sm" p="lg" radius="md" withBorder >
    //                 <Card.Section>
    //                     <Image
    //                     src= {m.imageUrl}
    //                     // height={imgHeight}
    //                     alt="Norway"
    //                     />
    //                     {/* <IpfsImage hash='https://gateway.pinata.cloud/ipfs/QmZqF4PxcvtobxCGQfhd9iJp4pujAmUiNQGA8hqTzew7jD/Set-16-(8).jpg'  height={imgHeight} alt='not'></IpfsImage> */}
    //                 </Card.Section>

    //                 <Group position="apart" mt="md" mb="xs">
    //                     <Text weight={500}>{m.title}</Text>
                 
    //                     <Badge color="red" variant="dark">
                        
    //                     0.02 ETH
    //                     </Badge>
    //                 </Group>

    //                 <Text size="sm" color="dimmed">
    //                     {m.description}
    //                 </Text>

    //                 <Button variant="light" color="blue" fullWidth mt="md" radius="md"
    //                  onClick={()=> router.push('/LaparoscopicSurgery')}>
    //                     Buy
    //                 </Button>
    //             </Card>

    //         </Grid.Col>
    //     ));
  return (
    <div className="App">
        <Grid justify="Center" >
        {/* {features} */}
           
            
           
        </Grid>
     
    </div>
  );
} 

export default RealitytvCompApi;
