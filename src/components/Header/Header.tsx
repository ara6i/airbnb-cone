import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Airbnb Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          {/* Access 'active' class from CSS module */}
          <li className={styles.active}>Stays</li>
          <li>Experiences</li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles.profileIcon}
        >
          <path
            fillRule="evenodd"
            d="M12 2a6 6 0 00-4.25 10.25c-2.1 1.24-3.75 3.54-4.06 6.13A.75.75 0 004.44 19h15.12a.75.75 0 00.75-.62c-.31-2.59-1.96-4.89-4.06-6.13A6 6 0 0012 2zM8.25 8a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM7.17 14.5a5.25 5.25 0 019.66 0H7.17z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
