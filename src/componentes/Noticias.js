import React from 'react';
import '../hojas-estilos/Noticias.css';

const Noticias = () => {
  const newsData = [
    {
      title: 'Noticia 1',
      description: 'Descripción de la noticia 1'
    },
    {
      title: 'Noticia 2',
      description: 'Descripción de la noticia 2'
    },
    {
        title: 'Noticia 3',
        description: 'Descripción de la noticia 3'
      },
  ];

  return (
    <div>
      <h2>Últimas noticias</h2>
      {newsData.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};
