import React from 'react'


import './Home.css';
import { NavLink } from 'react-router-dom';



export default function Home() {
  return (
   
    <div>

     
  


      <div className="allegory-hero__container">
      <div className="allegory-hero__content">
      <h1 className="allegory-hero__content--title">Allegory soluciona el problema de 
      comprar en tu talla.</h1>
      <a>
      
        <button className="allegory-hero__content--button" >
        <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/buscador" >Ir al buscador </NavLink>
          <i className="fas fa-arrow-right"></i></button>
      </a>

      </div>
    
   
      </div>

    
    
      

    </div>
    
  )
}
