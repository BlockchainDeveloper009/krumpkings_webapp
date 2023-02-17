import { Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import {useNftDataGetterByAddressGet} from '../frontend/Hooks/getLegendsOfKrump.js';
function AdvancedCare() {
  const pageHeader ='My Collections page'
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })

    const ownerAddress = '0x22dbb5357c23d8871076d643d2cbc5fd2133fa77'
    const nftdatas = useNftDataGetterByAddressGet(ownerAddress)
    console.log('testnft dadtas')
    console.log(nftdatas)
    console.log('completed')
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

