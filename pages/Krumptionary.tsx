import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import { IpfsImage } from 'react-ipfs-image';



const thisPageHeader= 'Krumptionary';
function Krumptionary() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {thisPageHeader}</Title>
        <h3></h3>

       
        <IpfsImage hash='ipfs://Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH'></IpfsImage>
        <h3>Test 2 For future use</h3>
        <IpfsImage hash='Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH' className='mt-2 rounded' onClick={() => {}} />
        
        </Box>
    </div>
  );
}

export default Krumptionary;

