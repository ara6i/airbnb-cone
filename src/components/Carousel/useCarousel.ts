import { useState } from 'react';

interface Slide {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const useCarousel = (slides: Slide[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Jump to a specific slide (pagination)
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};
