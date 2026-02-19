import { useState } from 'react';
import './About.css';

function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="about">
      <div className="about__container">
        {imgError ? (
          <div className="about__image-placeholder" aria-hidden="true" />
        ) : (
          <img
            className="about__image"
            src={`${import.meta.env.BASE_URL}enio-profile2.jpg`}
            alt="Foto do autor"
            onError={() => setImgError(true)}
          />
        )}
        <div className="about__content">
          <h2 className="about__title">Sobre o autor</h2>
          <p className="about__text">
            Sou um desenvolvedor web apaixonado por tecnologia e inovação.
            Formado pelo programa de Desenvolvimento Web da TripleTen,
            tenho experiência em React, JavaScript e criação de interfaces modernas.
          </p>
          <p className="about__text">
            Este projeto foi desenvolvido como projeto final do bootcamp,
            integrando a News API para busca e exibição de artigos em tempo real.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
