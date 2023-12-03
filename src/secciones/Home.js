import React from "react";
import imghome from "../img/imghome.jpg"; // Assuming this is the correct path to the image
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
        </header>
        <main>   
          <section className="hero-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h1 className="hero-title">Bienvenido a Employme</h1>
                  <p className="hero-description">
                    Conectamos talento con oportunidades. Descubre tu próximo desafío profesional o encuentra al candidato ideal.
                  </p>
                  <button className="btn btn-primary">Explorar Vacantes</button>
                </div>
                <div className="col-md-6">
                  <img src={imghome} alt="Imagen de Home" className="img-fluid"/>
                </div>
              </div>
            </div>
          </section>
          <section className="about-section">
            <div className="container">
              <p>Employme.info es una plataforma innovadora, líder que conecta a reclutadores y candidatos en busca de oportunidades laborales excepcionales.
          Nuestra misión es simplificar el proceso de búsqueda de empleo y selección de personal, brindando a las empresas mejores candidatos y ayudando a los profesionales a encontrar trabajos que impulsen sus carreras.</p>
            </div>
          </section>
        </main>   
      </div>
    );
  }
}

export default Home;
