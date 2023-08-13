import logo from '../../asset/img/Logo_nav-01.svg'
import './Nav1.css';


function Nav1() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light allegory-nav__container">
    
    <div className="collapse navbar-collapse allegory-nav__links col-3" id="navbarNav">

      <div className="allegory-nav__links--left">
        <a>Inicio</a>

      </div>
    </div>
    <div className="col-6 allegory-nav__logo">
      <a> <img src={logo} alt="Logo de la página" /> </a>
    </div>
    <div className="col-3">
      <div className="text-right">
         <button type="button" className="btn btn-calipso">
            Suscríbete </button> 
      </div>
    </div>
  </nav>

    // <nav className="navbar navbar-expand-lg navbar-light allegory-nav__container">
    //   <div className="col-6 allegory-nav__logo">
       
    //   </div>
    //   <ul>
    //     <a className="allegory-nav__links--left" href="/"> Inicio</a> 
    //     <a className="col-3" href="/about"> Acerca de</a>
       
    //   </ul>
    // </nav>
    
  );
}

export default Nav1;


{/* <img src={logo} alt="Logo de la página" /> */}