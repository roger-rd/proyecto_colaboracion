import React from 'react'
import anteojos from '../../asset/img/lentes.svg'
import '../../components/styles/styles.css'






export default function Productos() {
  return (
    <div>
         <div class="container-fluid project-tab">
          <div class="row">
            <div class="col-12">
              <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Productos</a>
                  <a class="nav-item nav-link disabled" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Estilo</a>
                  <a class="nav-item nav-link disabled" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Colorimetría</a>
                  <a class="nav-item nav-link disabled" id="nav-cuerpo-tab" data-toggle="tab" href="#nav-cuerpo" role="tab" aria-controls="nav-cuerpo" aria-selected="false">Tipo de cuerpo</a>
                  <a class="nav-item nav-link disabled" id="nav-ocasion-tab" data-toggle="tab" href="#nav-ocasion" role="tab" aria-controls="nav-ocasion" aria-selected="false">Ocasión</a>
                  <a class="nav-item nav-link disabled" id="nav-actividad-tab" data-toggle="tab" href="#nav-actividad" role="tab" aria-controls="nav-actividad" aria-selected="false">Etapa</a>
    
                </div>
                
                </nav>
            
        <div className="tab-content" id="nav-tabContent">
    
  
    <div className="tab-pane active show fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab ">
      <div className="mt-5 mb-5">
        <h2 className="mb-3">Productos</h2>
        <p> Tenemos un amplio catálogo de productos. Por favor escoge uno del listado a continuación: </p>
      </div>


      <div>

        <div className="buscador__productos">
          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
              <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Anteojos</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Bikini</small>
          </div>


          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Blazer</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Blusa</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Bolso</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Botas</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Botines</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Bufanda</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Camisa</small>
          </div>

          

          <div className="button-buscador__container">
            <button  className="button-buscador__productos--button">
              <a href="./productos.html">
              <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </a>
            </button>
            <small>Chaqueta</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Cinturón</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Collar</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Falda</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Jeans</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Jockey</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Lentes</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Pack</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>pantalón</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Pañuelo</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Pendientes</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Polera</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Sandalias</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Top</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Vestido</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Zapatillas</small>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
            </button>
            <small>Zapatos</small>
          </div>




          {/* <!-- Botón siguiente pestaña --> */}

          <div className="col-12 text-center my-5">
            <a href="#nav-profile" className="tab-links"> <button type="button" className="btn btn-dark px-5 py-3 ir-estilo">
                Siguiente </button> </a>
          </div>
        </div>
      </div>

    </div>
{/* 
    <!-- Pestaña 2: ESTILO --> */}

   


    </div>


  </div>
  </div>
  </div>
  </div>


  )
}
