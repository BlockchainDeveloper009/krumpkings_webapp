import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
import DiagnosticCompR1 from '../frontend/components/DiagnosticCompR1';
import DiagnosticCompR2 from '../frontend/components/DiagnosticCompR2';
import {useNftDataGetterByAddressGet} from '../frontend/Hooks/getLegendsOfKrump.js';
import RealitytvComp from '../frontend/components/RealitytvComp';
import RealitytvCompApi from '../frontend/components/RealitytvCompApi';
import { BrowserRouter } from 'react-router-dom';
let pageHeader = 'Krump Reality Tv Show'
function RealityTv() {
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
      
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {pageHeader}</Title>
        <h4>Coming Soon</h4>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <RealitytvComp/>
        <RealitytvCompApi/>
      </Box> 
        
        {/* <Cards></Cards> */}
       
    </div>
  );
}

export default RealityTv;


