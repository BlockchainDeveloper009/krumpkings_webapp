
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';

function claimNftComp() {
    const router = useRouter();
    const mysteryImg = "../../images/mysteryBox.png"
  return (
    <div className="App">
        
        <Grid justify="Center" >

            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image                        
                        src = {mysteryImg}
                        height={400}
                        alt="Mystry Box"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Whitelist Yourself</Text>
                        <Badge color="pink" variant="light">
                        0.02 ETH
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                       Own an dance Art
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Mint
                    </Button>
                </Card>

            </Grid.Col>

           
        </Grid>
     
    </div>
  );
} 

export default claimNftComp;
