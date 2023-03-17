
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ethers} from 'ethers';
import { logToConsole, debugFlag,legendsOfKrump_CONTRACT_ADDRESS,legendsOfKrump_CONTRACT_ABI} from '../../srcConstants.js';
import {  createClient, configureChains, WagmiConfig, useAccount, useConnect, useEnsName, usePrepareContractWrite, useContractWrite, useWaitForTransaction, useContractEvent  } from 'wagmi'

function claimNftComp() {
    const router = useRouter();
    const mysteryImg = "../../images/mysteryBox.png"
     const { address, connector, isConnected } = useAccount()
     const [MintLoading,setMintLoading] = useState(false);
     const [mintSuccess, setMintSuccess] = useState(false);
    
     const to = address
    let mintCost = ethers.utils.parseEther('0.02');
    let mintCostinWei = ethers.utils.formatEther(2000000000000000).toString();
     // let mintCostinWei = ethers.utils.formatEther(0.02);
     logToConsole(debugFlag,'-->'+legendsOfKrump_CONTRACT_ADDRESS)
     logToConsole(debugFlag,`Walletaddress->"${address}"`)
 

     const { 
        config,
        error: prepareError,
        isError: isPrepareError, }  = usePrepareContractWrite({
        address: legendsOfKrump_CONTRACT_ADDRESS,
        abi: legendsOfKrump_CONTRACT_ABI,
        functionName: 'mintByExternalAutoTokenId',
        args: [to,1, '0x2Ba1b3D3794eC6E919d40693F5C153c9b6bbf3f7', {value: mintCost?.toString()}],
        // enabled: Boolean(assetId),
        // overrides: {
        //     from: 'address',
        //     value: ethers.utils.parseEther('0.01'),
        //   },
      });
      const { data, write , error, isError, writeAsync, isLoading: mintLoading, status:stat } 
      = useContractWrite({
        ...config,
        onError(error) {
          console.log('Error', error)
        },
        onSettled(data, error) {
            console.log('Settled', { data, error })
          },
      })
     
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
        onError(error) {
            console.log('useWaitForTransaction-->Error', error)
          },
        onSuccess(data) {
            
            console.log('useWaitForTransaction-->Success', data);
            console.log(`stat-- > ${stat}`)
            router.push('/MintedSuccessfully');
          },
      })

      useContractEvent({
        address: legendsOfKrump_CONTRACT_ADDRESS,
        abi: legendsOfKrump_CONTRACT_ABI,
        eventName: 'mintSuccess',
        listener(mintedBy, nftContractAddress, tokenId) {
          console.log('---------------------')
          logToConsole(debugFlag, `--- ${mintedBy}, ${nftContractAddress}, ${tokenId}`);
        
         
        },
        once: true,
      })
      if(debugFlag==1)
      {
        logToConsole(debugFlag,'-isSuccess-')
        console.log(isSuccess)
        logToConsole(debugFlag,'---error----')
        logToConsole(debugFlag,error)
        logToConsole(debugFlag,'-------')
        logToConsole(debugFlag,'-data?.hash,-')
        logToConsole(debugFlag,'---data----')
        logToConsole(debugFlag,data)
        logToConsole(debugFlag,`data -- "${data}"`)
        logToConsole(debugFlag,`data?.hash -- "${data?.hash}"`)
        
        logToConsole(debugFlag,'-------')
      }

     
       async function  onMintClick(){
             try{
                if(error)
                {
                    alert(error);
                }
                if(isConnected){

                    logToConsole(debugFlag,'minting clicked');
                    logToConsole(debugFlag,`writeAsync = "${writeAsync}"`);
                    
                    logToConsole(debugFlag,`write = "${write}"`)
                    const tx = await writeAsync?.();
                    logToConsole(debugFlag,`tx== ${tx}`)
                    const res = await tx?.wait();
                    console.log(`res--"${res}"`)
                    setMintSuccess(true);


                } else {
                    alert("wallet not connected! - connect your wallet");
                }
             
         }catch(err){
                 console.error(`error-> "${err}"`);
             } finally{
                 setMintLoading(false);
             }
 
   }

  return (
    <div className="App">
        
        <Grid justify="Center" >

            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image                        
                        src = {mysteryImg}
                        height={400}
                        alt="Mystry Box"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Whitelist Yourself</Text>
                        <Badge color="pink" variant="light">
                        0.02 ETH
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                       Own an dance Art
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={onMintClick}>
                        
                        Mint
                    </Button>
                </Card>

            </Grid.Col>

           
        </Grid>
     
    </div>
  );
} 

export default claimNftComp;
