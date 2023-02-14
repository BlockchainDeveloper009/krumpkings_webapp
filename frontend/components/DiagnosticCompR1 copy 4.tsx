
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Radiography','Diagnostic Ultrasounds']
const GridDesc= [
    'We’re equipped to perform routine radiography services to identify many types of illness or injury when pets are sick or suffer a trauma.',
    'An ultrasound is a highly useful tool when evaluating heart conditions, internal organs, cysts and tumors, and diagnosing pregnancy.',
   
]
const GridImages= [ 
    "/images/Radiology1.PNG", 
    "/images/Radiology2.PNG", 
    ]
const imgHeight = 250
function DiagnosticCompR1() {
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
                        height={250}
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

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
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

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>
           
        </Grid>
     
    </div>
  );
} 

export default DiagnosticCompR1;
