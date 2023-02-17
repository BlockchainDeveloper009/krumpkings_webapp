import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
import PreventiveCareComp from '../frontend/components/PreventiveCareComp';
const thisPageHeader= ' Preventive Care';
function PreventiveCare() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
    <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}></Box>
      <div> <h1> {thisPageHeader}</h1></div>
      <Title order={1}>{thisPageHeader}</Title>
      <div>
      <PreventiveCareComp/>
      </div>
       
    </div>
  );
}

export default PreventiveCare;

