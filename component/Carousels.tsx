import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper,Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
  img:{
    height:'40%',
    width:'100%',
    '@media (min-width: 800px) and (max-width: 1220px) ': {
      backgroundColor: theme.colors.orange[6],
      height:'30%'
    },
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
      height:'20%'
    },
  }
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >


    </Paper>
  );
}

const data = [
  {
    image:
      'https://chuanperfume.com/wp-content/uploads/2021/11/banner-nuoc-hoa-nu-goi-cam-home.jpg',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://chuanperfume.com/wp-content/uploads/2021/11/banner-nuoc-hoa-nam-nu-1.jpg',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://chuanperfume.com/wp-content/uploads/2021/11/banner-nuoc-hoa-chinh-hang-home.jpg',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },

];

export default function CardsCarousel() {

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { classes } = useStyles();
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title} >
          <Image
          src={item.image}
          className={classes.img}
          alt="Norway"
        />
    </Carousel.Slide>
  ));

  return (
    <div className="container">

    <Carousel
    
      plugins={[autoplay.current]}
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xs"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
    </div>
  );
}