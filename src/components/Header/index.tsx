import React, { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CloseIcon from '../CloseIcon';
import Logo from '../Logo';
import MenuIcon from '../MenuIcon';
import NavMenu from '../NavMenu';
import styles from './Header.module.scss';

type HeaderProps = {
  isSiderOpen: boolean;
  toggleSider: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSiderOpen, toggleSider }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isCollapsed = window.innerWidth < 1200;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {!isCollapsed && <NavMenu type="horizontal" />}
      {isCollapsed && (
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isSiderOpen ? "close" : "menu"}
            nodeRef={buttonRef}
            classNames={{
              enter: styles.button_enter,
              enterActive: styles.button_enter_active,
              exit: styles.button_exit,
              exitActive: styles.button_exit_active,
            }}
            timeout={300}
          >
            <button ref={buttonRef} onClick={toggleSider} className={styles.siderButton}>
              {isSiderOpen && <CloseIcon />}
              {!isSiderOpen && <MenuIcon />}
            </button>
          </CSSTransition>
        </SwitchTransition>
      )}
    </header>
  )
}

export default Header;