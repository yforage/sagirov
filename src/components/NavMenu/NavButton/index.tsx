import React from 'react';
import styles from './NavButton.module.scss';

type NavButtonProps = {
  value: string;
}

const NavButton: React.FC<NavButtonProps> = ({ value }) => {
  return (
    <button className={styles.button}>{value}</button>
  )
}

export default NavButton;