import React from 'react'
import "./Header.css"
import logoImg from "../../assets/logo.jpg" 

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoImg} alt="Logo Maply" />
      </div>
      <nav className="header-menu">
        <ul>
          <li><a href="#triagem">Roteiros</a></li>
          <li><a href="#perguntas">Favoritos</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
        </ul>
      </nav>
    </header>
  )
}