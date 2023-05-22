import { Link } from "react-router-dom";

import "../css/menu.css";

const Menu = () => {
  return (
    <header>
      <Link to="/" className="logo">
        EA
      </Link>
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__list__item">
            <Link to="/">HOME</Link>
          </li>
          <li class="navigation__list__item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li class="navigation__list__item">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
