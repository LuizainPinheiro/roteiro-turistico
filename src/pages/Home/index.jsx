import React from 'react';
import './Home.css';
import bannerImg from '../../assets/banner.png'

export default function Home() {
  return (
    <main className="home-container">
      {/* 2. Aplique a imagem dinamica na tag via inline style */}
      <section 
        className="hero-banner" 
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay">
          <h1>Explore o mundo com o Maply</h1>
          <p>Descubra novos destinos e organize suas viagens dos sonhos em um só lugar.</p>
        </div>
      </section>

      {/* Destaques institucionais */}
      <section className="features-section">
        <h2>Por que planejar com o Maply?</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Roteiros Práticos</h3>
            <p>Organize seus pontos turísticos e horários sem complicação.</p>
          </div>
          <div className="card">
            <h3>Meus Favoritos</h3>
            <p>Guarde os melhores locais e monte sua lista personalizada.</p>
          </div>
          <div className="card">
            <h3>Viagens Inesquecíveis</h3>
            <p>Aproveite cada momento com tudo devidamente planejado.</p>
          </div>
        </div>
      </section>
    </main>
  );
}