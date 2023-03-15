import { Box, Card, Chip, createStyles, Spoiler,Image } from '@mantine/core';
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
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>


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

