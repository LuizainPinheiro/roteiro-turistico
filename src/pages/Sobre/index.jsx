import React, { useState, useEffect } from 'react';
import './Sobre.css';

export default function Sobre() {
  const [informacoes, setInformacoes] = useState([]);

  useEffect(() => {
    // Busca os dados do Maply no json-server
    fetch('http://localhost:3000/sobre')
      .then((resposta) => resposta.json())
      .then((dados) => setInformacoes(dados))
      .catch((erro) => console.error('Erro ao carregar dados do Sobre:', erro));
  }, []);

  return (
    <main className="sobre-container">
      <section className="sobre-header">
        <h2>Sobre o Maply</h2>
        <p>Conheça a nossa missão de transformar a forma como você planeja suas viagens.</p>
      </section>

      <section className="cards-grid">
        {informacoes.map((item) => (
          <div className="card sobre-card" key={item.id}>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>
    </main>
  );
}