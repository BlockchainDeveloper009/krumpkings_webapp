import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import ClaimNftComp from '../frontend/components/claimNftComp';


let pageHeader = 'Krump Kings Nft Claim Page'
function ClaimNft() {
  
  return (
    <div className="App">
      
     <Box sx={(theme) =>({  color:'yellow', fontSize: 18, lineHeight: 1.4, paddingTop: 150, paddingDown:200, paddingLeft:250, paddingRight:200, padding: theme.spacing.xl,})}>
      <Title order={1}>  {pageHeader}</Title>
        <h4>Coming Soon</h4>
       <ClaimNftComp/>
      </Box> 
       
    </div>
  );
}

export default ClaimNft;


