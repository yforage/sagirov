import React from 'react';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <button className={styles.logo}>
      <img alt='logo' src="logo.png" />
      <div className={styles.borderBottomLeft} />
      <div className={styles.borderBottomRight} />
      <div className={styles.borderTopLeft} />
      <div className={styles.borderTopRight} />
    </button>
  );
}

export default Logo;