import React from "react";
import styles from './Tiles.module.scss';

const Tiles: React.FC = () => (
    <div className={styles.tiles}>
      <div className={styles.tile}>
        <div>мы</div>
        <div>
          <div className={styles.tile_title}>1</div>
          <span>на рынке</span>
        </div>
      </div>
      <div className={styles.tile}>
        <div>гарантируем</div>
        <div>
          <div className={styles.tile_title}>50%</div>
          <span>безопасность</span>
        </div>
      </div>
      <div className={styles.tile}>
        <div>календарик за</div>
        <div>
          <div className={styles.tile_title}>2001<span>г.</span></div>
          <span>в подарок</span>
        </div>
      </div>
      <div className={styles.tile}>
        <div>путешествие</div>
        <div>
          <div className={styles.tile_title}>597</div>
          <span>дней</span>
        </div>
      </div>
    </div>
);

export default Tiles;