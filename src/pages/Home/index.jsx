import React from 'react';
import './Home.css';

import Box from '../../Components/Box'; 

import bannerImg from '../../assets/banner.png';
import imgDestino1 from '../../assets/bahiaDestino.png';
import imgDestino2 from '../../assets/rioDestino.png';
import imgDestino3 from '../../assets/florianopolisDestino.png';
import imgDestino4 from '../../assets/natalDestino.png';
import imgDestino5 from '../../assets/jalapaoDestino.png';
import imgDestino6 from '../../assets/fozDestino.png';


export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-banner" style={{ backgroundImage: `url(${bannerImg})` }}></section>

      <section className="destinos-section">
        <h2 className="titulo-section">PRINCIPAIS DESTINOS</h2>
        <div className="cards-destino">
          <Box title='Bahia' description='Cultura vibrante, axé e praias paradisíacas no litoral nordestino.' imagem={imgDestino1} />
          <Box title='Rio de Janeiro' description='A Cidade Maravilhosa com praias icônicas e o Cristo Redentor.' imagem={imgDestino2} />
          <Box title='Florianópolis' description='A Ilha da Magia com dunas, surfe e natureza preservada.' imagem={imgDestino3} />
          <Box title='Natal' description='Passeios de buggy pelas dunas e sol o ano inteiro.' imagem={imgDestino4} />
          <Box title='Jalapão' description='Ecoturismo de aventura com fervedouros de águas cristalinas.' imagem={imgDestino5} />
          <Box title='Foz do Iguaçu' description='Espetáculo da natureza com as impressionantes Cataratas do Iguaçu.' imagem={imgDestino6} />
        </div>
      </section>
      
      <section className="features-section">
        <h2 className="titulo-section">Por que planejar com o Maply?</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Roteiros Práticos</h3>
            <p>
            Monte itinerários sob medida, organizando atrações, passeios e horários em um só lugar, sem estresse e sem perder tempo durante a viagem.
            </p>
          </div>
          <div className="card">
            <h3>Meus Favoritos</h3>
            <p>
              Crie e gerencie sua lista de destinos e pontos turísticos imperdíveis para consultar, adicionar e alterar a qualquer momento.
            </p>
          </div>
          <div className="card">
            <h3>Viagens Inesquecíveis</h3>
            <p>
              Aproveite ao máximo cada segundo do seu destino com a tranquilidade de ter um planejamento completo e bem estruturado na palma da sua mão.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}