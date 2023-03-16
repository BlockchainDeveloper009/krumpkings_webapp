
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const GridHeaders= ['Radiography','Diagnostic Ultrasounds']
const GridDesc= [
    'We’re equipped to perform routine radiography services to identify many types of illness or injury when pets are sick or suffer a trauma.',
    'An ultrasound is a highly useful tool when evaluating heart conditions, internal organs, cysts and tumors, and diagnosing pregnancy.',
   
]
const AdsSellerImages= [ 
    "/images/Set-82-(Krumptionary)-3.jpg", 
    "/images/Set-82-(Krumptionary)-4.jpg", 
    "/images/Set-185-(The-Golden-Series)-44h.jpg",
    "/images/Set-7-(Unmovable-Cover-5).jpg",
    ]
const imgHeight = 650
function AdSellerCarousel() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
    sx={{ maxWidth:1050 }}
    mx="auto"
    withIndicators
    height={600}
   
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}
  >
    <Carousel.Slide>
 

<Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= {AdsSellerImages[0]}
                        height={imgHeight}
                        fit="contain"
                        alt="Krump Kings"
                        />
                    </Card.Section>
                </Card>
    </Carousel.Slide>
    {/* <Carousel.Slide>
    <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= 'https://youtu.be/JxNqMDixFZo'
                        height={imgHeight}
                        fit="contain"
                        alt="Youtube video"
                        />
                    </Card.Section>

                </Card>
    </Carousel.Slide> */}
    <Carousel.Slide>
    <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= {AdsSellerImages[1]}
                        height={imgHeight}
                        fit="contain"
                        alt="Norway"
                        />
                    </Card.Section>

                </Card>


    </Carousel.Slide>
    <Carousel.Slide>
    <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src= {AdsSellerImages[2]}
                        height={imgHeight}
                        fit="contain"
                        alt="Norway"
                        />
                    </Card.Section>

                </Card>


    </Carousel.Slide>
    {/* ...other slides */}
  </Carousel>
  );
} 

export default AdSellerCarousel;
