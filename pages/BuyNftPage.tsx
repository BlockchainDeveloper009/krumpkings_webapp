import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";

import { useAccount } from 'wagmi';

import DiagnosticServicesSimpleGrid from '../frontend/components/DiagnosticServicesSimpleGrid';
import TravelCertificatesCompR1 from '../frontend/components/TravelCertificatesCompR1';

import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import {legendsOfKrump_CONTRACT_ADDRESS,legendsOfKrump_CONTRACT_ABI, legendsOfKrump_ownerAddress} from '../srcConstants.js';
import { ethers} from 'ethers';
import { useRouter } from "next/router";
let pageHeader = 'Krump Movies'
function BuyNftPage() {
    const [value, setValue] = useState(['react']);
    const [txnErr, settxnErr] = useState(false);
    const router = useRouter();
    const {
      query: {   _tokenId,
        fromaddr,
        toaddr,
        token},
    } = router
    const props = {
      _tokenId,
      fromaddr,
      toaddr,
      token
    }
    

  // const { assetId } = location.state || { assId: "none" };
  const { address, connector, isConnected } = useAccount()
 
  console.log(`address: ${address}`)
  console.log(`tokenId: ${props._tokenId}`)
  console.log(`fromaddr: ${props.fromaddr}`)
  console.log(`tokenId = ${token}`)
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(props._tokenId)
    },[value])
    let mintCost = ethers.utils.parseEther('0.02');
    // const { 
    //   config,
    //   error: prepareError,
    //   isError: isPrepareError, }  = usePrepareContractWrite({
    //   address: legendsOfKrump_CONTRACT_ADDRESS,
    //   abi: legendsOfKrump_CONTRACT_ABI,
    //   functionName: 'mint',
    //   args: [_tokenId, {value: mintCost?.toString()}],
    //   // enabled: Boolean(assetId),
    //   // overrides: {
    //   //     from: 'address',
    //   //     value: ethers.utils.parseEther('0.01'),
    //   //   },
    // });

    const { 
      config,
      error: prepareError,
      isError: isPrepareError, }  = usePrepareContractWrite({
      address: legendsOfKrump_CONTRACT_ADDRESS,
      abi: legendsOfKrump_CONTRACT_ABI,
      functionName: 'safeTransferFrom',
      
      args: [legendsOfKrump_ownerAddress, 
      address?.toString(),
      props._tokenId, 1 , '0x'],
      // args: [props.fromaddr, address,props._tokenId, 1 , '0x00'],
      // enabled: Boolean(assetId),
      // overrides: {
      //     from: 'address',
      //     value: ethers.utils.parseEther('0.01'),
      //   },
    });
    const { data, write , error, isError, writeAsync, isLoading: mintLoading, } = useContractWrite(config)
    
    const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,  })
      function wr(){
        try{

          const tx = write?.()
          console.log(write)
          console.log(tx)
          console.log('--')
          console.log(data?.hash)
          console.log('-------')
         }catch(error)
         {
          settxnErr(true)
          console.log('error while buying=>'+ error)
         }
      }
   
  //   async function  onBuyClick(){
  //     try{
  //     const tx = await writeAsync?.();
  //  const res = await tx?.wait();
  //  setMintSuccess(true);
  // }catch(error){
  //         console.error(error);
  //     } finally{
  //         setMintLoading(false);
  //     }

  
  return (
    <div className="App">
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}> {pageHeader}</Title>
      <h4>Own a part of Krump historic movies</h4>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <button disabled={mintLoading} onClick={()=>wr()}>click to buy</button>
        '{txnErr.toString()}' - error flag
      </Box> 
        
        
    </div>
  );
}

export default BuyNftPage;

