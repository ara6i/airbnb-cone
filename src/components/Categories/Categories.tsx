import React from 'react';
import styles from './Categories.module.scss';

import NavButton from './NavButton';
import CategorieList from './CategorieList';
import { useScroll } from '../../hooks/useScroll';

const Categories: React.FC = () => {
  const { scrollRef, canScrollPrev, canScrollNext, scroll } = useScroll();

  return (
    <div className={styles.navWrapper}>
      {/* Prev Button */}
      <NavButton
        direction="left"
        visible={canScrollPrev}
        onClick={() => scroll('left')}
      />

      {/* Category List */}
      <CategorieList scrollRef={scrollRef} />

      {/* Next Button */}
      <NavButton
        direction="right"
        visible={canScrollNext}
        onClick={() => scroll('right')}
      />
    </div>
  );
};

export default Categories;
