import { Box, Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
import ChipsExample from '../frontend/components/ChipsExample';
function Faq() {



  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <p>Quality affordable care to all pets
Both walk-ins /appointments.
All surgeries must be scheduled by appointments.
We require prior examination of the pet before scheduling surgery.
We don’t accept checks.
For you and others protection, all dogs must be on a leash and properly restrained while in the clinic /premises.
All cats must be in an appropriate carrier.
Please keep an eye on your pets at all times.</p>
</Box>
    </div>
  );
}

export default Faq;

