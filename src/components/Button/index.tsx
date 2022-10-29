import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, value }) => {
  return (
    <div className={styles.border}>
      <button className={styles.button} type={type} onClick={onClick}>
        {value}
      </button>
      <div className={styles.borderTopRight} />
      <div className={styles.borderBottomLeft} />
    </div>
  )
}

export default Button;