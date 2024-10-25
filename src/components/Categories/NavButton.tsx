import React from 'react';
import styles from './Categories.module.scss';

interface NavButtonProps {
  direction: 'left' | 'right';
  visible: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  direction,
  visible,
  onClick,
}) => {
  if (!visible) return null;

  return (
    <button
      className={direction === 'left' ? styles.prevButton : styles.nextButton}
      onClick={onClick}
    >
      {direction === 'left' ? '❮' : '❯'}
    </button>
  );
};

export default NavButton;
