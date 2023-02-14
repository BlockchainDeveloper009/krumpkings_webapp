import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
let petInjections= [
  '',
]
const pageHeader ='Sales page'
function PreventiveCareClinic() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {pageHeader}</Title>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        </Box>
    </div>
  );
}

export default PreventiveCareClinic;

