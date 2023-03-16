import { Box, Card, Image, Chip, createStyles, Spoiler } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
function ContactUs() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">

          <Box sx={{  color:'yellow', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:250, paddingLeft:250, paddingRight:100,}}>

          <p>Contact our support</p>

<article>
Timings:
  Mon-Fri : 8am - 6pm 
  Sat : 8am - 5pm 
  Sun: Holiday
  </article>
 
  <article>
      Phone Number: +1 Krump Kings

      
      
  </article>
          <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                            src="./images/Team.png"
                            height={600}
                            fit="contain"
                            alt="Norway"
                            />
                        </Card.Section>
            </Card>

    </Box>
  
    </div>
  );
}

export default ContactUs;

