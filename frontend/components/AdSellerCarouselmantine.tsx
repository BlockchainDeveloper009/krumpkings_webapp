

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
//import { createStylesServer, ServerStyles } from '@mantine/ssr';

import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
const AdsSellerImages= [ 
    "/images/Home3.PNG", 
    "/images/gogleReviews.PNG", 
    "/images/Home2.PNG",,
    ]
const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}
function Car1({ image, title, category }: CardProps) {
    const { classes } = useStyles();
  
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Read article
        </Button>
      </Paper>
    );
  }


  const data = [
    {
      image:
      AdsSellerImages[0],
      title: 'Best forests to visit in North America',
      category: 'nature',
    },
    {
      image:
      AdsSellerImages[1],
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
      AdsSellerImages[2],
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image:
      AdsSellerImages[2],
      title: 'Aurora in Norway: when to visit for best experience',
      category: 'nature',
    },
    {
      image:
      AdsSellerImages[1],
      title: 'Best places to visit this winter',
      category: 'tourism',
    },
    {
      image:
        AdsSellerImages[0],
      title: 'Active volcanos reviews: travel at your own risk',
      category: 'nature',
    },
  ];

const GridHeaders= ['Radiography','Diagnostic Ultrasounds']
const GridDesc= [
    'We’re equipped to perform routine radiography services to identify many types of illness or injury when pets are sick or suffer a trauma.',
    'An ultrasound is a highly useful tool when evaluating heart conditions, internal organs, cysts and tumors, and diagnosing pregnancy.',
   
]

const imgHeight = 650
function AdSellerCarouselmantine() {
    const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      {/* <Car1 {...item} /> */}
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
} 

export default AdSellerCarouselmantine;
