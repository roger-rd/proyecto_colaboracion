import logo from "../../asset/img/Logo_nav-01.svg";
import "../styles/styles.css";

function Nav1() {
  return (
    <div className="container-fluid project-tab">
      <div className="row">
        <div className="col-12">
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
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
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
                to="/estilos"
              >
                Estilos
              </NavLink>
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
                  Tenemos un amplio catálogo de productos. Por favor escoge uno
                  del listado a continuación:{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav1;
