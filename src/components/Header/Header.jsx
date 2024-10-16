import css from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { Link, NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return isActive ? css.active : css.link;
};

const Header = () => (
  <header className={css.wrapper}>
    <nav className={css.navigation}>
      <Link to="/">
        <svg className={css.icon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </Link>
      <ul className={css.navigationList}>
        <li>
          <NavLink to="/" exact="true" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
