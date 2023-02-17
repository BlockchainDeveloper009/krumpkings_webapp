import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
import DiagnosticCompR1 from '../frontend/components/DiagnosticCompR1';
import DiagnosticCompR2 from '../frontend/components/DiagnosticCompR2';
import DiagnosticServicesSimpleGrid from '../frontend/components/DiagnosticServicesSimpleGrid';
import SurgeryServicesCompR1 from '../frontend/components/SurgeryServicesCompR1';
import SurgeryServicesCompR2 from '../frontend/components/SurgeryServicesCompR2';
function PremiumCollections() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}> Premium Collections</Title>
      <h4>Exclusive </h4>
       
       
        <SurgeryServicesCompR2/>
        </Box>
        
        
    </div>
  );
}

export default PremiumCollections;

