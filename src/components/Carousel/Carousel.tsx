import React from 'react';
import { motion } from 'framer-motion';

import styles from './Carousel.module.scss';
import { useCarousel } from './useCarousel';

interface Slide {
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const { currentIndex, totalSlides, nextSlide, prevSlide, goToSlide } =
    useCarousel(slides);

  return (
    <div className={styles.carousel}>
      <motion.div
        className={styles.carouselTrack}
        animate={{ x: -currentIndex * 100 + '%' }}
        transition={{ type: 'tween', duration: 0 }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ flex: '0 0 100%' }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className={styles.image}
            />
          </div>
        ))}
      </motion.div>

      {/* Prev Button - only show if not on the first slide */}
      {currentIndex > 0 && (
        <button className={styles.prevButton} onClick={prevSlide}>
          ❮
        </button>
      )}

      {/* Next Button - show on every slide except the last */}
      {currentIndex < totalSlides - 1 && (
        <button className={styles.nextButton} onClick={nextSlide}>
          ❯
        </button>
      )}

      {/* Pagination Dots */}
      <div className={styles.dots}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.active : ''
            }`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
