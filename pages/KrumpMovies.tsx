import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
import DiagnosticCompR1 from '../frontend/components/DiagnosticCompR1';
import DiagnosticCompR2 from '../frontend/components/DiagnosticCompR2';
import DiagnosticServicesSimpleGrid from '../frontend/components/DiagnosticServicesSimpleGrid';
import TravelCertificatesCompR1 from '../frontend/components/TravelCertificatesCompR1';
let pageHeader = 'Krump Movies'
function KrumpMovies() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}> {pageHeader}</Title>
      <h4>Own a part of Krump historic movies</h4>
        {/* <DiagnosticServicesSimpleGrid/> */}
        <TravelCertificatesCompR1/>
      </Box> 
        
        {/* <Cards></Cards> */}
    </div>
  );
}

export default KrumpMovies;

