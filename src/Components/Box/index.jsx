import React from 'react';
import './Box.css';

export default function Box({ title, description, imagem }) {
  return (
    <div className="container-destinos">
      <img src={imagem} alt={title} className="image" />
      <h3 className="title-box">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
}