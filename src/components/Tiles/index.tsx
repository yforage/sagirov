import React from "react";
import styles from './Tiles.module.scss';
import Tile, { TileProps } from "./Tile";

import tiles from '../../config/tiles.json';

const Tiles: React.FC = () => (
    <div className={styles.tiles}>
      {tiles.map((tile: TileProps, index) => <Tile key={index} {...tile} />)}
    </div>
);

export default Tiles;