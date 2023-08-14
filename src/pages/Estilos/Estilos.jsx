import React from "react";
import "../../components/styles/styles.css";

export default function () {
  return (
    <div>
      <div className="container-fluid project-tab">
        <div className="row">
          <div className="col-12">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active "
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Productos
                </a>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                  to="/estilos"
                >
                  Estilos
                </NavLink> */}
                <a
                  className="nav-item nav-link disabled"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Colorimetría
                </a>
                <a
                  className="nav-item nav-link disabled"
                  id="nav-cuerpo-tab"
                  data-toggle="tab"
                  href="#nav-cuerpo"
                  role="tab"
                  aria-controls="nav-cuerpo"
                  aria-selected="false"
                >
                  Tipo de cuerpo
                </a>
                <a
                  className="nav-item nav-link disabled"
                  id="nav-ocasion-tab"
                  data-toggle="tab"
                  href="#nav-ocasion"
                  role="tab"
                  aria-controls="nav-ocasion"
                  aria-selected="false"
                >
                  Ocasión
                </a>
                <a
                  className="nav-item nav-link disabled"
                  id="nav-actividad-tab"
                  data-toggle="tab"
                  href="#nav-actividad"
                  role="tab"
                  aria-controls="nav-actividad"
                  aria-selected="false"
                >
                  Etapa
                </a>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane active show fade"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab "
              >
                <div className="mt-5 mb-5">
                  <h2 className="mb-3">Productos</h2>
                  <p>
                    {" "}
                    Tenemos un amplio catálogo de productos. Por favor escoge
                    uno del listado a continuación:{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="tab-pane disabled fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    
    
                  <div className="mt-5 mb-5">
                    <h2 className="mb-3">Estilo</h2>
                    <p> Existen muchos estilos o maneras de vestirse que dependen de la edad, cultura, actividad laboral o
                      simplemente de nuestros gustos personales. Escoge el tuyo: </p>
                  </div>
    
                  <section className="botones__container">
                    <div className="row botonera-opciones">
                      <button type="button" className="btn btn-outline-dark">
                        <p>Bohemio</p>
                      </button>
    
                      <button type="button" className="btn btn-outline-dark">
                        <p>Chic Urbano</p>
                      </button>
    
                      <button type="button" className="btn btn-outline-dark">
                        <p>Clásico</p>
                      </button>
    
                      <button type="button" className="btn btn-outline-dark">
                        <p>Creativo</p>
                      </button>
                      <button type="button" className="btn btn-outline-dark">
                        <p>Dramático</p>
                      </button>
    
                      <button type="button" className="btn btn-outline-dark">
                        <p>Natural</p>
                      </button>
    
                      <button type="button" className="btn btn-outline-dark">
                        <p>Romántico</p>
                      </button>
    
                      <button type="button" className="btn btn-outline-dark">
                        <p>Seductor</p>
                      </button>
                    </div>
                  </section>

                  </div> */}
    </div>
  );
}
