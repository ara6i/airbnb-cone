import React, { useState } from 'react';
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const distance = touchEndX - touchStartX;

    // Swipe threshold (in pixels) to trigger a slide change
    const threshold = 50;

    if (distance > threshold) {
      prevSlide();
      setTouchStartX(null); // reset to avoid multiple triggers in the same swipe
    } else if (distance < -threshold) {
      nextSlide();
      setTouchStartX(null); // reset to avoid multiple triggers in the same swipe
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null); // reset on touch end
  };

  return (
    <div
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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

      {currentIndex > 0 && (
        <button className={styles.prevButton} onClick={prevSlide}>
          ❮
        </button>
      )}

      {currentIndex < totalSlides - 1 && (
        <button className={styles.nextButton} onClick={nextSlide}>
          ❯
        </button>
      )}

      <div className={styles.dots}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
