import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";

import {useNftDataGetterByAddressGet, Nft1Data} from '../frontend/Hooks/getLegendsOfKrump.js';
import ClaimNftComp from '../frontend/components/claimNftComp';
import RealitytvCompApi from '../frontend/components/RealitytvCompApi';
import { BrowserRouter } from 'react-router-dom';

let pageHeader = 'Krump Kings Nft Claim Page'
function ClaimNft() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })
    const ownerAddress = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5'
    const nftdatas = useNftDataGetterByAddressGet(ownerAddress)
    console.log('testnft dadtas')
    console.log(nftdatas)
    console.log('completed')

  return (
    <div className="App">
      
     <Box sx={(theme) =>({  color:'yellow', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200, padding: theme.spacing.xl,})}>
      <Title order={1}>  {pageHeader}</Title>
        <h4>Coming Soon</h4>
       <ClaimNftComp/>
      </Box> 
        
        {/* <Cards></Cards> */}
       
    </div>
  );
}

export default ClaimNft;


