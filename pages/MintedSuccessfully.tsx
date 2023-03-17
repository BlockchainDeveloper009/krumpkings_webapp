import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import { useContractEvent } from 'wagmi';
import ClaimNftComp from '../frontend/components/claimNftComp';
import { logToConsole, debugFlag,legendsOfKrump_CONTRACT_ADDRESS,legendsOfKrump_CONTRACT_ABI} from '../srcConstants.js';

let pageHeader = 'Mint Success';
let pm = '-------------------------------------------------------- Minting Success page';
function MintedSuccessfully() {
  const [token,setTokenId] = useState('');
  useContractEvent({
    address: legendsOfKrump_CONTRACT_ADDRESS,
    abi: legendsOfKrump_CONTRACT_ABI,
    eventName: 'mintSuccess',
    listener(mintedBy, nftContractAddress, tokenId) {
      console.log('---------------------')
      logToConsole(debugFlag, `--- ${mintedBy}, ${nftContractAddress}, ${tokenId}`);
      pm = `${pm} -- 'token-- ${mintedBy}', '${nftContractAddress}', '${tokenId}' `
     
    },
    once: true,
  })
  
  return (
    <div className="App">
      
      <Box sx={(theme) =>({  color:'yellow', fontSize: 18, lineHeight: 1.4, paddingTop: 250, paddingDown:200, paddingLeft:200, paddingRight:200, padding: theme.spacing.xl,})}>
      <Title order={1}>  {pageHeader}</Title>
        <h4>Coming Soon</h4>
        {token}
      </Box> 
       
    </div>


  );
}

export default MintedSuccessfully;


