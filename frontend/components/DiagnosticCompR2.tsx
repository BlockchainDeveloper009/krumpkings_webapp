
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Bronchoscopy','Endoscopy']
const GridDesc= [
    'A bronchoscopy is a useful tool when evaluating a patient with a respiratory problem that cannot otherwise be diagnosed or as a treatment to remove foreign bodies.',
    'An endoscopy is a highly useful medical imaging tool used to examine your pet without actually examining an internal organ or obtaining a biopsy.',
   
]
const GridImages= [ 
    "/images/Bronchoscopy1.PNG", 
    "/images/Endoscopy1.PNG", 
    ]
    const imgHeight = 250
function DiagnosticCompR2() {
    const router = useRouter();
    let i=0;
  return (
    <div className="App">
        <Grid justify="Center">
            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= {GridImages[0]}
                        height={imgHeight}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{GridHeaders[0]}</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {GridDesc[0]}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push('/Radiography')}>
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>
            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= {GridImages[1]}
                        height={imgHeight}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{GridHeaders[1]}</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        {GridDesc[1]}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push('/Radiography')}>
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>
           
        </Grid>
     
    </div>
  );
} 

export default DiagnosticCompR2;
