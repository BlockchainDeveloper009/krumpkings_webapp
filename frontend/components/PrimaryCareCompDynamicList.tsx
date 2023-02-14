
import { Box, Button, Loader, MantineProvider, Paper, ScrollArea, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ethers} from 'ethers';
import {legendsOfKrump_CONTRACT_ADDRESS,legendsOfKrump_CONTRACT_ABI} from '../../srcConstants.js';
import {  createClient, configureChains, WagmiConfig, useAccount, useConnect, useEnsName, usePrepareContractWrite, useContractWrite, useWaitForTransaction  } from 'wagmi'
//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Dentistry','Parasite Control (Fleas, Ticks & Heartworms)','Microchipping', 'Wellness & Preventive Care']
const GridDesc= [
    'Annual dental exams and cleanings are recommended to protect your pet from many health problems and help them maintain a healthy and clean mouth.',
    'Parasites such as fleas and ticks can be very damaging to your pet’s health. Preventive measures should be taken year-round to inhibit potential outbreaks.',
'Microchip identification is the most reliable way to reunite lost pets with their owners.',
'Annual wellness exams evaluate your pets overall health, detect problems before they become serious, and keep them on track to live a long, healthy life.',
''
]
const GridPreventiveCareImages= [ 
    "/images/Dentistry1.PNG", 
    "/images/Fleas1.PNG", 
    "/images/1.PNG"]
    const mockProduct = [ { ""}]
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error: false
    })
function PrimaryCareCompDynamicList() {
    const router = useRouter();
    const viewport = useRef<HTMLDivElement>(null);
    const url= ''
    

    // useEffect(() => {
    //     setProducts({
    //         loading: true,
    //         data:null,
    //         error: false
    //     })

    //     axios.get(url)
    //         .then(response=> {
    //             setProducts({
    //                 loading:false,
    //                 data: response.data,
    //                 error:false
    //             })
    //         })
    //         .catch(() => {
    //             setProducts({
    //                 loading:false,
    //                 data: response.data,
    //                 error:false
    //             })
    //         })
    // })
    let _tokenId=6;
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
     
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })
      console.log('-isSuccess-')
      console.log(isSuccess)
      console.log('-------')
      console.log('-data?.hash,-')
      console.log(data)
      console.log('-------')
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
//   let content = 
//    products.data.map((product,key) => 
//    <div>
//      { product.name}
//    </div>)
  
  return (
    <div className="App">
        
        <Grid justify="Center">
        <ScrollArea style={{ width: 1000, height: 5000 }} viewportRef={viewport}>
        {/* ... content */}
      
            <Grid.Col span={4} styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src={GridPreventiveCareImages[0]}
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{GridHeaders[0]}</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {GridDesc[0]}
                    </Text>
                    <Text size="sm" color="dimmed">
                       {mintCostinWei.toString()}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push('/Dentistry')}>
                        Learn More --
                    </Button>

              
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                    disabled={mintLoading}
                     onClick={onMintClick}>
                        onMintClick
                    </Button>

                    {/* { mintLoading ? 'Minting... please check wallet and wait: Mint'} */}

                    {/* {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>} */}
                </Card>

            </Grid.Col>


           

            <Grid.Col span={4} styles={{maxWdith: 150}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src={GridPreventiveCareImages[1]}
                                height={300}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{GridHeaders[1]}</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                {GridDesc[1]}
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/Dentistry')}>
                            
                                    Learn More --
                            </Button>
                           
                        </Card>
            </Grid.Col>
           
            <Grid.Col span={4} styles={{maxWdith: 350}} sm={4} xs={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="/images/vaccine1.PNG"
                                height={200}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{GridHeaders[2]}</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                {GridDesc[2]}
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/Dentistry')}>
                            
                                    Learn More --
                            </Button>
                           
                        </Card>
            </Grid.Col>
            </ScrollArea>
        </Grid>
        
    </div>      
  );
} 

export default PrimaryCareCompDynamicList;
