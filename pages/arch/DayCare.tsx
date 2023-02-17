import { Box, Button, Chip, Container, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";


import HospitalityServicesComp1 from '../frontend//components/HospitalityServicesComp1';
import styles from '../styles/Home.module.css' 
const thisPageHeader= 'Day Care';
const titleSize= 2;
function DayCare() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App"  >
      <article >
      <Title order={1}  > {thisPageHeader}</Title>
      <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      
        
        {/* <DiagnosticServicesSimpleGrid/>  section container*/}
        {/* <Button  variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push('/')}>
                        Back
                    </Button> */}
        
        <Container size="lg" sx={{ color: 'red', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200,}}>
          xs container with xs horizontal padding
          <Title order={titleSize}> Overview</Title>
        <p>
        Radiography, also known as X-rays, is one of the most common and valuable medical diagnostic tools. X-rays are highly useful for screening areas of the body that have contrasting tissue densities, 
        or when evaluating solid tissues.
        </p>
        </Container>
        <p >
        <Title order={titleSize}> Why would my pet need X-rays?</Title>
        
        If your pet is sick or has suffered a trauma, X-rays provide a minimally invasive tool to help our doctors diagnose your pet. 
        X-rays are also used in general wellness exams to diagnose potential problems before they become serious.
        </p>

        
       
       <section>
       <Title order={titleSize}> How is X-ray testing used?</Title>
       How is X-ray testing used?
X-rays can be used to detect a variety of ailments in animals including arthritis, tumors, bladder and kidney stones, and lung abnormalities such as pneumonia. They are also used to evaluate bone damage, the gastrointestinal tract, respiratory tract, genitourinary system, organ integrity, and even identify foreign objects that may have been ingested. Dental radiographs help distinguish healthy teeth from those that may need to be extracted, and identify any abnormalities beneath the gums including root damage, tumors, and abscesses. 
In some cases, we may need to sedate your pet or use short-acting general anesthesia.
       </section>
       <Title order={titleSize}> When is X-ray testing appropriate?</Title>
        <p>
        We may recommend veterinary X-rays as part of a diagnostic procedure if your pet is experiencing any health conditions or as a preventive measure in a routine senior wellness examination. 
        We use radiology alone or in conjunction with other diagnostic tools depending on the patient’s condition. We’re fully equipped to perform routine radiology services to identify many types of illness or
         injury when pets are sick or suffer a trauma.
        </p>

        <Title order={titleSize}> When is X-ray testing appropriate?</Title>
        <p>
        We may recommend veterinary X-rays as part of a diagnostic procedure if your pet is experiencing any health conditions or as a preventive measure in a routine senior wellness examination. 
        We use radiology alone or in conjunction with other diagnostic tools depending on the patient’s condition. We’re fully equipped to perform routine radiology services to identify many types of illness or
         injury when pets are sick or suffer a trauma.
        </p>
       </Box>
       <Container size="lg" sx={{ color: 'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200,}}>
          xs container with xs horizontal padding
          <Title order={titleSize}> Overview</Title>
        <p>
        Radiography, also known as X-rays, is one of the most common and valuable medical diagnostic tools. X-rays are highly useful for screening areas of the body that have contrasting tissue densities, 
        or when evaluating solid tissues.
        </p>

        
        </Container>
       <Box
  sx={(theme) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    textAlign: 'center',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  })}
>
<Title order={1}> When is X-ray testing appropriate?</Title>
        <p>
        We may recommend veterinary X-rays as part of a diagnostic procedure if your pet is experiencing any health conditions or as a preventive measure in a routine senior wellness examination. 
        We use radiology alone or in conjunction with other diagnostic tools depending on the patient’s condition. We’re fully equipped to perform routine radiology services to identify many types of illness or
         injury when pets are sick or suffer a trauma.
        </p>
</Box>
      </article>

    </div>
  );
}

export default DayCare;

