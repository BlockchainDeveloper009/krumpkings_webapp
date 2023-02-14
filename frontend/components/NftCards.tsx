
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';

function NftCards(props:any) {
    const router = useRouter();
  return (
    <div className="App">
        <Grid justify="Center">
            <Grid.Col span="auto" styles={{maxWdith: 350}} sm={4} xs={4}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= {props.product.images[0].imageUrl}
                        //"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="Nft image missing"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                       {props.product.images[0].description}
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Book classic tour now
                    </Button>
                </Card>

            </Grid.Col>
           
           
        </Grid>
     
    </div>
  );
} 

export default NftCards;
