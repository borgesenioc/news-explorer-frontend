import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__image-placeholder" />
        </div>
        <div className="about__content">
          <h2 className="about__title">Sobre o autor</h2>
          <p className="about__text">
            Sou um desenvolvedor web apaixonado por tecnologia e inovacao.
            Formado pelo programa de Desenvolvimento Web da TripleTen,
            tenho experiencia em React, JavaScript e criacao de interfaces modernas.
          </p>
          <p className="about__text">
            Este projeto foi desenvolvido como projeto final do bootcamp,
            integrando a News API para busca e exibicao de artigos em tempo real.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
