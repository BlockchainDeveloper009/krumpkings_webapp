import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";

import {useNftDataGetterByAddressGet, Nft1Data} from '../frontend/Hooks/getLegendsOfKrump.js';
import ClaimNftComp from '../frontend/components/claimNftComp';
import { BrowserRouter } from 'react-router-dom';

let pageHeader = 'Krump Kings White Lister'
function WhiteListUsers() {
    const [value, setValue] = useState(['react']);


  return (
    <div className="App">
      
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {pageHeader}</Title>
        <h4>Coming Soon</h4>
       
        <ClaimNftComp/>
       
      </Box> 
        
       
       
    </div>
  );
}

export default WhiteListUsers;


