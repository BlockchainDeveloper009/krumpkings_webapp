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

      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}

      <article>
        Serving Pasadena and Surrounding Areas Since 2012

        The hospital has undergone three major expansions to reach its current size of 4500 square feet.Our facility houses state-of-the-art diagnostic, surgical and medical equipment, an isolation ward, ICU, surgical suite and on-site laboratory. Additional amenities include our expansive boarding kennel area with a fenced yard and separate feline boarding facilities.

        Northpark Animal Hospital is veterinarian owned and managed, with a focus on quality evidence-based veterinary care, client education, and friendly, personal service. The hospital received accreditation by the American Animal Hospital Association in 1994 and was awarded the highest of three levels of accreditation.

        The hospital has undergone three major expansions to reach its currentsize of 4500 square feet. Our facility houses state-of-the-art diagnostic, treatment, and surgical equipment including:

        Digital x-rays and ability for review of radiographs by board certified veterinary radiologists and cardiologists.

        Ultrasound – utilized for both echocardiogram (ultrasound of the heart) and abdominal ultrasounds.

        Endoscopy
        </article>
        In House laboratory allowing for rapid same-day bloodwork, urinalysis, fecal, and other test results.

        Full surgical suite equipped with ability to perform soft tissue, orthopedic, and laparoscopic surgical procedures. We also have onsite LigaSure and cautery equipment.

        Anesthesia monitoring equipment: EKG, blood pressure, SPO2, heartrate, and capnography.

        ICU and treatment area equipped to handle emergencies and hospitalize patients for more intensive treatment when needed.

        Dental x-ray capabilities as well as equipment necessary for dental cleanings and oral surgery/tooth extractions.

        Additional amenities include our expansive boarding kennel area with a fenced yardand separate feline boarding facilities.

        Northpark Animal Hospital focusedon quality evidence-basedmodernveterinary care, client education, and friendly, personal service. The hospital received accreditation by the American Animal Hospital Association in 1994 and was awarded the highest of three levels of accreditation.
        
    </Spoiler>

   
    </Box>
    </div>
  );
}

export default ContactUs;

