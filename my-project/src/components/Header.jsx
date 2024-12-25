import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt='logo' />
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/YapayZeka'>Yapay Zeka</NavLink>
            </li>
            <li>
              <NavLink to='/Haber'>Haber</NavLink>
            </li>
            <li>
              <NavLink to='/Makale'>Makale</NavLink>
            </li>
            <li>
              <NavLink to='/Video'>Video</NavLink>
            </li>
            <li>
              <NavLink to='/Tavsiyeler'>Tavsiyeler</NavLink>
            </li>
            <li>
              <NavLink to='/Sosyal'>Sosyal</NavLink>
            </li>
            <li>
              <NavLink to='/Etkinlik'>Etkinlik</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;