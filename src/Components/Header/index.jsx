import { Link } from 'react-router-dom';
import Nav from '../Nav'; 
import "./Header.css";
import "../../global.css";
import logoImg from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <img className="logo" src={logoImg} alt="Logo Maply" />
        </Link>
      </div>
      <Nav />
    </header>
  );
}