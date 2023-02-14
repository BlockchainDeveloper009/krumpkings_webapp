import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";


import HospitalityServicesComp1 from '../frontend/components/HospitalityServicesComp1';
const thisPageHeader= 'Hospitality Services';
function HospitalityServices() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}></Box>
      <Title order={1}> ----------------- {thisPageHeader}</Title>
        <h1>filllers</h1>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <HospitalityServicesComp1/>
       
        
        {/* <Cards></Cards> */}
    </div>
  );
}

export default HospitalityServices;

