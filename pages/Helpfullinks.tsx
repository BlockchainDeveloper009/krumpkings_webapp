import { Box, Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
import ChipsExample from '../frontend/components/ChipsExample';
function Helpfullinks() {



  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <p>Quality affordable care to all pets</p>
      <a href="">Pet Preventive Care</a>
      </Box>
    </div>
  );
}

export default Helpfullinks;

