
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="header-menu">
      <ul>
        <li><Link to="/">Roteiros</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/sobre">Sobre nós</Link></li>
      </ul>
    </nav>
  );
}