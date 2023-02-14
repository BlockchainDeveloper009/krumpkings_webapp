
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Domestic Health Certificates','International Health Certificates']
const GridDesc= [
    'Are you traveling domestically within the USA? As a federally accredited veterinarian practice, we can issue travel certificates for your healthy pet so they can travel with you.',
    'Going out of the country? As a federally accredited veterinarian practice, we can issue travel and acclimation certificates for your healthy pet so they can travel internationally with you.',
   
]
const GridImages= [ 
    "/images/DomesticHealth1.PNG", 
    "/images/DomesticHealth1.PNG", 
    ]
const imgHeight = 250
function TravelCertificatesCompR1() {
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

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                     onClick={()=> router.push(`/DomesticHealthCertificates`)}>
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
                     onClick={()=> router.push('/InternationalHealthCertificates')}>
                        Learn More --
                    </Button>
                </Card>

            </Grid.Col>
           
        </Grid>
     
    </div>
  );
} 

export default TravelCertificatesCompR1;
