import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";


import HospitalityServicesComp1 from '../frontend/components/HospitalityServicesComp1';
const thisPageHeader= 'Spay & Neuter';
function SpayAndNeuter() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}>  {thisPageHeader}</Title>
        
        {/* <DiagnosticServicesSimpleGrid/>  section container*/}
        
        <Title order={1}> Overview</Title>
        <p>
        Radiography, also known as X-rays, is one of the most common and valuable medical diagnostic tools. X-rays are highly useful for screening areas of the body that have contrasting tissue densities, 
        or when evaluating solid tissues.
        </p>
       
        <Title order={1}> Why would my pet need X-rays?</Title>
        <p>
        If your pet is sick or has suffered a trauma, X-rays provide a minimally invasive tool to help our doctors diagnose your pet. 
        X-rays are also used in general wellness exams to diagnose potential problems before they become serious.
        </p>

        <Title order={1}> When is X-ray testing appropriate?</Title>
        <p>
        We may recommend veterinary X-rays as part of a diagnostic procedure if your pet is experiencing any health conditions or as a preventive measure in a routine senior wellness examination. 
        We use radiology alone or in conjunction with other diagnostic tools depending on the patient’s condition. We’re fully equipped to perform routine radiology services to identify many types of illness or
         injury when pets are sick or suffer a trauma.
        </p>
       <Box >
       <section>
       <Title order={1}> How is X-ray testing used?</Title>
       How is X-ray testing used?
X-rays can be used to detect a variety of ailments in animals including arthritis, tumors, bladder and kidney stones, and lung abnormalities such as pneumonia. They are also used to evaluate bone damage, the gastrointestinal tract, respiratory tract, genitourinary system, organ integrity, and even identify foreign objects that may have been ingested. Dental radiographs help distinguish healthy teeth from those that may need to be extracted, and identify any abnormalities beneath the gums including root damage, tumors, and abscesses. 
In some cases, we may need to sedate your pet or use short-acting general anesthesia.
       </section>
       </Box>
        
      </Box>
    </div>
  );
}

export default SpayAndNeuter;

