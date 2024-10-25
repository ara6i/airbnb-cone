import { useRef, useState, useEffect } from 'react';

export const useScroll = () => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = scrollRef.current.clientWidth / 2;
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const updateButtonsVisibility = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateButtonsVisibility);
      updateButtonsVisibility();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateButtonsVisibility);
      }
    };
  }, []);

  return { scrollRef, canScrollPrev, canScrollNext, scroll };
};
