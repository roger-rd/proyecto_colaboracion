import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

import Home from './pages/Home/Homes';
 import Blog from './pages/Blog/Blogs'
 import Nosotras from './pages/Nosotras/Nosotras'
 import Productos from './pages/Producto/Productos';
 import Register from './pages/Register/Register';
 import Login from './pages/Login/Logins';

import Estilos from './pages/Estilos/Estilos';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Context from './context/Context';
import { useState } from 'react';


function App() {
  const [usuario, setUsuario] = useState(null)


  return (
    <div className="App">
      <Context.Provider value={{ usuario, setUsuario }} >  
      <Nav/>
      
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/buscador" element={<Productos />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />

      <Route path="/estilos" element={<Estilos />} /> 
      
      <Route path="/nosotras" element={<Nosotras />} />  
      </Routes>
 
      <Footer/>
      <ToastContainer/>
      </Context.Provider>
    </div>
  );
}
export default App;
