import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>Maply</h3>
          <p>Organize suas viagens e crie roteiros inesquecíveis de forma simples e rápida.</p>
        </div>
    
        <div className="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#triagem">Roteiros</a></li>
            <li><a href="#perguntas">Favoritos</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul className="social-links-vertical">
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://wa.me/1234567890">WhatsApp</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Maply. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}