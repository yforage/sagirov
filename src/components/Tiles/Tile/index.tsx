import React from 'react';
import styles from './Tile.module.scss';

export type TileProps = {
  accent: string;
  textTop: string;
  textBottom: string;
}

const Tile: React.FC<TileProps> = ({ accent, textTop, textBottom }) => (
  <div className={styles.tile}>
    <div>{textTop}</div>
    <div>
      <div className={styles.tile_title}>{accent}</div>
      <span>{textBottom}</span>
    </div>
  </div>
)

export default Tile;