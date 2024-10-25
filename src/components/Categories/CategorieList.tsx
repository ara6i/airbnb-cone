import React from 'react';
import styles from './Categories.module.scss';

const navItems = [
  { icon: '🟊', label: 'Icons' },
  { icon: '🏠', label: 'Tiny homes' },
  { icon: '🏕️', label: 'Cabins' },
  { icon: '🌅', label: 'Amazing views' },
  { icon: '🏙️', label: 'Design' },
  { icon: '⛺', label: 'A-frames' },
  { icon: '🏖️', label: 'Beachfront' },
  { icon: '🏞️', label: 'Lakefront' },
  { icon: '👽', label: 'OMG!' },
  { icon: '⛷️', label: 'Ski-in/out' },
  { icon: '🌲', label: 'Treehouses' },
  { icon: '🏰', label: 'Castles' },
  { icon: '🏊‍♂️', label: 'Amazing pools' },
  { icon: '🛶', label: 'Houseboats' },
  { icon: '🔥', label: 'Trending' },
  { icon: '🍃', label: 'Countryside' },
  { icon: '🌾', label: 'Farms' },
  { icon: '🎡', label: 'Theme parks' },
  { icon: '🛏️', label: 'Private rooms' },
  { icon: '🍷', label: 'Vineyards' },
  { icon: '🏜️', label: 'Desert homes' },
  { icon: '🌋', label: 'Volcano views' },
  { icon: '🏔️', label: 'Mountain cabins' },
  { icon: '🌳', label: 'Eco homes' },
  { icon: '🏯', label: 'Historic homes' },
  { icon: '⛴️', label: 'Boathouses' },
  { icon: '🚤', label: 'Yachts' },
  { icon: '🎪', label: 'Glamping' },
  { icon: '🖼️', label: 'Artistic spaces' },
  { icon: '🏛️', label: 'Mansions' }, // Last item
];
interface CategorieListProps {
  scrollRef: React.RefObject<HTMLUListElement>;
}

const CategorieList: React.FC<CategorieListProps> = ({ scrollRef }) => {
  return (
    <ul className={styles.navList} ref={scrollRef}>
      {navItems.map((item, index) => (
        <li key={index} className={styles.navItem}>
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategorieList;
