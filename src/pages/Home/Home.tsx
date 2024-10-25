import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from './Home.module.scss'; // Import styles
import Categories from '../../components/Categories/Categories';

interface Slide {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Home: React.FC = () => {
  const slidesCarousel1: Slide[] = [
    {
      imageUrl: '/images/slide2.webp',
      title: 'Image 1',
      subtitle: 'Subtitle 1',
    },
    {
      imageUrl: '/images/slide3.webp',
      title: 'Image 2',
      subtitle: 'Subtitle 2',
    },
    {
      imageUrl: '/images/slide4.webp',
      title: 'Image 3',
      subtitle: 'Subtitle 3',
    },
    {
      imageUrl: '/images/slide5.webp',
      title: 'Image 3',
      subtitle: 'Subtitle 3',
    },
    {
      imageUrl: '/images/slide6.webp',
      title: 'Image 3',
      subtitle: 'Subtitle 3',
    },
  ];

  const slidesCarousel2: Slide[] = [
    {
      imageUrl: '/images/slide5.webp',
      title: 'Image 4',
      subtitle: 'Subtitle 4',
    },
    {
      imageUrl: '/images/slide6.webp',
      title: 'Image 5',
      subtitle: 'Subtitle 5',
    },
    {
      imageUrl: '/images/slide7.webp',
      title: 'Image 6',
      subtitle: 'Subtitle 6',
    },
    {
      imageUrl: '/images/slide5.webp',
      title: 'Image 6',
      subtitle: 'Subtitle 6',
    },
    {
      imageUrl: '/images/slide6.webp',
      title: 'Image 6',
      subtitle: 'Subtitle 6',
    },
    {
      imageUrl: '/images/slide7.webp',
      title: 'Image 6',
      subtitle: 'Subtitle 6',
    },
  ];

  const slidesCarousel3: Slide[] = [
    {
      imageUrl: '/images/slide8.webp',
      title: 'Image 7',
      subtitle: 'Subtitle 7',
    },
    {
      imageUrl: '/images/slide9.webp',
      title: 'Image 8',
      subtitle: 'Subtitle 8',
    },
    {
      imageUrl: '/images/slide1.webp',
      title: 'Image 9',
      subtitle: 'Subtitle 9',
    },
    {
      imageUrl: '/images/slide13.webp',
      title: 'Image 9',
      subtitle: 'Subtitle 9',
    },
  ];

  return (
    <div className={styles.home}>
      <Categories />
      <div className={styles.carouselContainer}>
        <Carousel slides={slidesCarousel1} />
        <Carousel slides={slidesCarousel2} />
        <Carousel slides={slidesCarousel3} />
      </div>
    </div>
  );
};

export default Home;
