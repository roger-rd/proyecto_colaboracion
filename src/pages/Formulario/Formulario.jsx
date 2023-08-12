import React from 'react'

export default function Formulario() {
  return (
    <div>
        <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<div class="col-md-2">
    <label for="inputZip" class="form-label">Cintura</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Busto</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Altura</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Peso</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  
  
  <div className="col-md-2">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected> Tu Cuerpo.</option>
      <option>Triangilo Invertido</option>
      <option>Reloj de arena</option>
      <option>Triangulo</option>
      <option>Rectangular</option>
      <option>Ovalado</option>
    </select>
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Registrar
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
  )
}
