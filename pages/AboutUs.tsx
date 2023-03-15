import { Box, Chip, createStyles, Spoiler, Title } from '@mantine/core';
import { useEffect, useState } from "react";


function AboutUs() {
    const pageHeader = "About Us"
    const article = "But before legends were born… About 20 years ago, a spark was born with a group of talented young entertainers who’s courage inspired a global movement.";
    
    

  return (
    <div className="App">
       <Box sx={{  color:'yellow', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:250, paddingRight:200,}}>
       <Title order={1}> {pageHeader}</Title>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}

      <article>
        {article}

       
        </article>
       
    </Spoiler>


    </Box>
       
    </div>
  );
}

export default AboutUs;

