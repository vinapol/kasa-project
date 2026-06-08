import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

export default function Navbar() {
  return (
    <nav className="header">
      <img src="../assets/logo.svg" alt="Logo Kasa" className="header__logo" />
      
      <div className="header__nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}