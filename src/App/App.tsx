import React, { useCallback, useRef, useState } from 'react';
import Header from '../components/Header';
import StartPage from './pages/StartPage';
import styles from './App.module.scss';
import NavMenu from '../components/NavMenu';
import { CSSTransition } from 'react-transition-group';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const siderRef = useRef<HTMLDivElement>(null);

  const toggleSider = useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <div className={styles.page}>
      <Header isSiderOpen={isOpen} toggleSider={toggleSider} />
      <CSSTransition
        nodeRef={siderRef}
        in={isOpen}
        unmountOnExit
        classNames={{
          enter: styles.sider_enter,
          enterActive: styles.sider_enter_active,
          exit: styles.sider_exit,
          exitActive: styles.sider_exit_active,
        }}
        timeout={400}
      >
        <div className={styles.wrapper}>
          <div ref={siderRef} className={styles.sider}>
            <NavMenu type="vertical" />
          </div>
        </div>
      </CSSTransition>
      <StartPage />
    </div>
);
}

export default App;
