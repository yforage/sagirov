import React from 'react';
import Button from '../../../components/Button';
import LineToCenter from '../../../components/LineToCenter';
import Tiles from '../../../components/Tiles';
import styles from './StartPage.module.scss';

const StartPage: React.FC = () => {
  const isLine = window.innerWidth > 845;
  const isPlanet = window.innerWidth > 1539 && window.innerHeight < 1120;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            <div>Путешествие</div>
            <span>на красную планету</span>
          </div>
          <div className={styles.button}>
            <Button value='Начать путешествие' />
            {isLine && <LineToCenter />}
          </div>
        </div>
        <div className={styles.tiles}>
          <Tiles />
        </div>
        {isPlanet && <div className={styles.planet} />}
      </div>
    </div>
  )
}

export default StartPage;