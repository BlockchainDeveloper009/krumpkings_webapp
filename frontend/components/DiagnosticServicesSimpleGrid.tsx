
import { Button, Flex, Loader, MantineProvider, Paper, SimpleGrid, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cards from './Cards';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Radiography','Diagnostic Ultrasounds','Bronchoscopy', 'Endoscopy','Laboratory Services']
const GridDesc= [
    'We’re equipped to perform routine radiography services to identify many types of illness or injury when pets are sick or suffer a trauma.',
    'An ultrasound is a highly useful tool when evaluating heart conditions, internal organs, cysts and tumors, and diagnosing pregnancy.',
    'A bronchoscopy is a useful tool when evaluating a patient with a respiratory problem that cannot otherwise be diagnosed or as a treatment to remove foreign bodies.',
    'An endoscopy is a highly useful medical imaging tool used to examine your pet without actually examining an internal organ or obtaining a biopsy.',
    'Diagnostic testing can identify problems your pet may be experiencing so that proper treatment can begin before a condition worsens.'
]
const GridPreventiveCareImages= [ 
    "/images/Dentistry1.PNG", 
    "/images/Fleas1.PNG", 
    "/images/1.PNG"]
function DiagnosticServicesSimpleGrid() {
    const router = useRouter();
  return (
    <div className="App">
        <Flex justify="center">
    <SimpleGrid cols={2}

      spacing="xl"
      verticalSpacing="lg"
       >
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="/images/vaccine1.PNG"
                                height={200}
                                width={200}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{GridHeaders[2]}</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                {GridDesc[2]}
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/Dentistry')}>
                            
                                    Learn More --
                            </Button>
                           
                        </Card>


                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="/images/vaccine1.PNG"
                                height={200}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>{GridHeaders[2]}</Text>
                                <Badge color="pink" variant="light">
                                On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" color="dimmed">
                                {GridDesc[2]}
                            </Text>

                            <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                            onClick={()=> router.push('/Dentistry')}>
                            
                                    Learn More --
                            </Button>
                           
                        </Card>
      
                       
    </SimpleGrid>
    </Flex>
        
           
            
                   
           
       
     
    </div>
  );
} 

export default DiagnosticServicesSimpleGrid;
