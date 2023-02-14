import { Box, Chip, createStyles } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../frontend/components/Cards';
import ChipsExample from '../frontend/components/ChipsExample';
function Dentistry() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
        <p>
        Overview
Studies show that 50% of all dogs and cats have some form of periodontal disease. That number jumps to 80% in pets that are 3 years of age or older. If left untreated, periodontal disease can cause infection, pain, and tooth loss over time. It can also lead to serious health problems like microscopic changes in the heart, liver, and kidneys. Because of this, we recommend an annual veterinary dental healthcare examination for all pets.

Why do pets need dental care?
Many health problems start in the mouth. Plaque, tartar, periodontal disease, and infected teeth serve as a source of inflammation and infection for the rest of the body.

Dental disease is one of the most common problems that we see in dogs and cats. It can cause drooling, reluctance to eat, swelling, bad breath, redness of the gums, loose teeth and tooth discoloration.

When should I seek dental care for my pet?
Dental issues and dental related diseases can easily be prevented by visiting our veterinarians regularly for dental examinations and cleanings. We take a comprehensive approach to dental care including dental health assessment, treatment, and prevention.

How does it work?
Teeth Exams, Cleaning and Polishing
Dog and cat dental cleanings are very similar to human dental cleanings, except that we are required to use anesthesia to properly and safely examine and clean the teeth. After the cleaning, our veterinarians perform a thorough oral exam and check for signs of disease like gum loss, root exposure, or pockets around the root.

Also similar to human dentistry, we do full mouth radiographs (x-rays) of your pet. This allows our veterinarians to be able to evaluate the roots of your pet's teeth as well as any disease or abnormalities that are located below the gum line and not visible on examination alone.

Tooth Extractions
We make every effort to save teeth that we feel have a chance to be successfully treated. In many circumstances, however, periodontal disease is so advanced that treatment without extraction is unsuccessful. We only extract teeth that in the doctor's opinion are beyond saving.

Minor Oral Surgery
Many teeth require oral surgery to safely remove each individual root. We have extensive training and experience to perform these procedures properly. Pain medications are administered in clinic and provided for in-home aftercare.
        </p>
        </Box>
    </div>
  );
}

export default Dentistry;

