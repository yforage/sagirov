import React from "react";
import NavButton from "./NavButton";
import styles from './NavMenu.module.scss';
import classnames from 'classnames';

type NavMenuProps = {
  type: "vertical" | "horizontal";
}

const NavMenu: React.FC<NavMenuProps> = ({ type }) => {
  return (
    <div className={classnames(styles.menu, styles[type])}>
      <NavButton value="Главная" />
      <NavButton value="Технология" />
      <NavButton value="График полетов" /> 
      <NavButton value="Гарантии" />
      <NavButton value="О компании" />
      <NavButton value="Контакты" />
    </div>
  );
}
export default NavMenu;