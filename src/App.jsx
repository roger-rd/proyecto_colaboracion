import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

import Home from './pages/Home/Homes';
 import Blog from './pages/Blog/Blogs'
 import Nosotras from './pages/Nosotras/Nosotras'
 import Productos from './pages/Producto/Productos';
 import Register from './pages/Register/Register';
import Estilos from './pages/Estilos/Estilos';
import LoginForm from './pages/Login/Login';
import Anteojos from './pages/ItemProductos/Anteojos';
import Bikini from './pages/ItemProductos/Bikini';
import Blazer from './pages/ItemProductos/Blazer';
import Blusa from './pages/ItemProductos/Blusa';
import Bolso from './pages/ItemProductos/Bolso';
import Botas from './pages/ItemProductos/Botas';
import Botines from './pages/ItemProductos/Botines';
import Bufanda from './pages/ItemProductos/Bufanda';
import Camisa from './pages/ItemProductos/Camisa';
import Chaqueta from './pages/ItemProductos/Chaqueta';
import Cinturon from './pages/ItemProductos/Cinturon';
import Collar from './pages/ItemProductos/Collar';
import Falda from './pages/ItemProductos/Falda';
import Jeans from './pages/ItemProductos/Jeans';
import Jockey from './pages/ItemProductos/Jockey';
import Lentes from './pages/ItemProductos/Lentes';
import Pack from './pages/ItemProductos/Pack';
import Pantalon from './pages/ItemProductos/Pantalon';
import Pañuelo from './pages/ItemProductos/Pañuelo';
import Pendientes from './pages/ItemProductos/Pendientes';
import Polera from './pages/ItemProductos/Polera';
import Sandalias from './pages/ItemProductos/Sandalias';
import Top from './pages/ItemProductos/Top';
import Vestido from './pages/ItemProductos/Vestido';
import Zapatillas from './pages/ItemProductos/Zapatillas';
import Zapatos from './pages/ItemProductos/zapatos';





function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/buscador" element={<Productos />} />
      <Route path="/register" element={<Register />} />
      <Route path="/estilos" element={<Estilos />} /> 
      <Route path="/login" element={<LoginForm />} />
      <Route path="/anteojos" element={<Anteojos />} />
      <Route path="/bikini" element={<Bikini />} />
      <Route path="/blazer" element={<Blazer />} />
      <Route path="/blusa" element={<Blusa />} />
      <Route path="/bolso" element={<Bolso />} />
      <Route path="/botas" element={<Botas />} />
      <Route path="/botines" element={<Botines />} />
      <Route path="/bufanda" element={<Bufanda />} />
      <Route path="/camisa" element={<Camisa />} />
      <Route path="/chaqueta" element={<Chaqueta />} />
      <Route path="/cinturon" element={<Cinturon />} />
      <Route path="/collar" element={<Collar />} />
      <Route path="/falda" element={<Falda />} />
      <Route path="/jeans" element={<Jeans />} />
      <Route path="/jockey" element={<Jockey />} />
      <Route path="/lentes" element={<Lentes />} />
      <Route path="/pack" element={<Pack />} />
      <Route path="/pantalon" element={<Pantalon />} />
      <Route path="/pañuelo" element={<Pañuelo />} />
      <Route path="/pendientes" element={<Pendientes />} />
      <Route path="/polera" element={<Polera />} />
      <Route path="/sandalias" element={<Sandalias />} />
      <Route path="/top" element={<Top />} />
      <Route path="/vestido" element={<Vestido />} />
      <Route path="/zapatillas" element={<Zapatillas />} />
      <Route path="/zapatos" element={<Zapatos />} />
      

      
      <Route path="/nosotras" element={<Nosotras />} />  
      </Routes>
 
      <Footer/>
    </div>
  );
}
export default App;
