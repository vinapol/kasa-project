import "../style/not-found.scss"
import { NavLink } from "react-router-dom";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="body">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "")}>Retourner sur la page d’accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
}
