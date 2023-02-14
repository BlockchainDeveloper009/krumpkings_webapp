import { Box, Chip, createStyles, Spoiler } from '@mantine/core';
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
      <a>testing address .........</a>

      
      {/* Content here */}

      <article>
      Timings:
        Mon-Fri : 8am - 6pm 
        Sat : 8am - 5pm 
        Sun: Holiday
        </article>
       
        <article>
            Phone Number: +18329918811

            Customer Feedback:
            Address: 4215 Spencer Hwy, Pasadena, TX 77504
        </article>
   

    <Box>


      
     sedon quality evidence-basedmodernveterinary care, client education, and friendly, personal service. The hospital received accreditation by the American Animal Hospital Association in 1994 and was awarded the highest of three levels of accreditation.
        
 
      
    </Box>
       
    </div>
  );
}

export default ContactUs;

