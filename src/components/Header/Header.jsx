import Logo from "../Logo/Logo";
import css from "./Header.module.css";

import { Link, NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return isActive ? css.active : css.link;
};

const Header = () => (
  <header className={css.wrapper}>
    <nav className={css.navigation}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={css.navigationList}>
        <li>
          <NavLink to="/" exact="true" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/campers" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
