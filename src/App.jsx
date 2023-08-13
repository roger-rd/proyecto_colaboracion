import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

import Home from './pages/Home/Homes';
 import Blog from './pages/Blog/Blogs'
 import Nosotras from './pages/Nosotras/Nosotras'
 import Productos from './pages/Producto/Productos';
 import Register from './pages/Register/Register';




function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/buscador" element={<Productos />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/nosotras" element={<Nosotras />} />  
      </Routes>
 
      <Footer/>
    </div>
  );
}
export default App;
