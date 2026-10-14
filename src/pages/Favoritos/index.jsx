import React, { useEffect, useState } from 'react';
import './Favoritos.css';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  
  // Estados para os campos do formulário
  const [destino, setDestino] = useState('');
  const [feedback, setFeedback] = useState('');
  const [imagem, setImagem] = useState('');

  // GET
  useEffect(() => {
    fetch('http://localhost:3000/favoritos')
      .then((res) => res.json())
      .then((data) => setFavoritos(data))
      .catch((error) => console.log('Erro ao carregar favoritos:', error));
  }, []);

  // POST
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!destino || !feedback || !imagem) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const novoFavorito = { destino, feedback, imagem };

    fetch('http://localhost:3000/favoritos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoFavorito)
    })
      .then((res) => res.json())
      .then((itemSalvo) => {
        setFavoritos([...favoritos, itemSalvo]);
        // Limpa o formulário após o cadastro
        setDestino('');
        setFeedback('');
        setImagem('');
      })
      .catch((error) => console.log('Erro ao cadastrar favorito:', error));
  };

  // DELETE
  const deleteFavorito = (id) => {
    fetch(`http://localhost:3000/favoritos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setFavoritos(favoritos.filter((item) => item.id !== id));
      })
      .catch((error) => console.log('Erro ao deletar:', error));
  };

  return (
    <div className="favoritos-container">
      {/* Formulário de Cadastro */}
      <section className="form-section">
        <h2>Cadastrar Destino Favorito</h2>
        <form onSubmit={handleSubmit} className="favoritos-form">
          <div className="form-group">
            <label>Destino:</label>
            <input
              type="text"
              placeholder="Ex: Rio de Janeiro"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>URL da Imagem:</label>
            <input
              type="text"
              placeholder="Ex: https://link-da-imagem.png"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Feedback / Experiência:</label>
            <textarea
              placeholder="Conte o que achou deste lugar..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="3"
            />
          </div>

          <button type="submit" className="btn-salvar">Cadastrar Favorito</button>
        </form>
      </section>

      {/* Lista de Favoritos Cadastrados */}
      <section className="lista-section">
        <h2>Meus Favoritos ({favoritos.length})</h2>

        {favoritos.length === 0 ? (
          <p className="sem-favoritos">Nenhum favorito cadastrado ainda.</p>
        ) : (
          <div className="cards-grid">
            {favoritos.map((fav) => (
              <article className="card favorito-card" key={fav.id}>
                <img src={fav.imagem} alt={fav.destino} className="card-img" />
                <div className="card-body">
                  <h3>{fav.destino}</h3>
                  <p>{fav.feedback}</p>
                  <button className="btn-delete" onClick={() => deleteFavorito(fav.id)}>
                    Deletar
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}