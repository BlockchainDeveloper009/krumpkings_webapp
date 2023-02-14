import { Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
function AdvancedCare() {
  const pageHeader ='My Collections page'
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Title order={1}>  {pageHeader}</Title>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
    </div>
  );
}

export default AdvancedCare;

