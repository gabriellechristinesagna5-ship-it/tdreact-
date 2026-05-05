import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_red.png';

function Header() {
  const getNavClass = ({ isActive }) =>
    isActive ? 'nav active' : 'nav';

  return (
    <header className="header-container">
      <NavLink to="/" aria-label="Accueil Kasa">
        <img className="logo" src={logo} alt="Kasa" />
      </NavLink>

      <nav className="navbar">
        <NavLink end className={getNavClass} to="/">
          Accueil
        </NavLink>
        <NavLink className={getNavClass} to="/About">
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
