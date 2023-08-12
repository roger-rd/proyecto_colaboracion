import React from "react";
import top from '../../asset/img/post-1.png'
// import './Blogs.css'
import '../../components/styles/styles.css'


export default function Blog() {



  return (
    <div>
      <section className="allegory-page__container container mt-5 mb-5 container">
        <h2 className="allegory-page__container--title">Blog</h2>
          <div className="row">
              <div className="card col-12 col-md-4 card-blog">
              <a> <img className="card-img-top"  src={top} alt="Logo de la página" /> </a>
                <div className="card-body">
                  <h3 className="blog__titulo">Colorimetría</h3>
                  <p className="card-text blog__p">
                    ¿Qué es la Colorimetría? Es el estudio basado en la Teoría del color según las características físicas de las personas...
                </p></div>
                <a href="#" className="card-link"> Leer más <i className="fas fa-arrow-right m-1 "></i>  </a>
              </div>
    
              <div className="card col-12 col-md-4 card-blog">
              <a> <img className="card-img-top"  src={top} alt="Logo de la página" /> </a>   
                <div className="card-body">
                  <h3 className="blog__titulo">Estilo</h3>
                  <p className="blog__p">
                    Existen muchos estilos o maneras de vestirse que dependen de la edad, cultura, actividad laboral...
                  </p>
                </div>
                <a href="#" className="card-link"> Leer más <i className="fas fa-arrow-right m-1 "></i>  </a>
              </div>
    
              <div class="card col-12 col-md-4 card-blog">
              <a> <img className="card-img-top"  src={top} alt="Logo de la página" /> </a>
                <div class="card-body">
                  <h3 class="blog__titulo">Sobre Allegory</h3>
                  <p class="blog__p">
                    No importa tu tipo de cuerpo, estatura, color de ojos, piel o pelo para encontrar tu estilo, sólo debes buscar lo que te...
                  </p>
                </div>
                <a href="#" class="card-link"> Leer más <i class="fas fa-arrow-right m-1 "></i>  </a>
              </div>
          </div>
    </section>
    </div>
  );
}