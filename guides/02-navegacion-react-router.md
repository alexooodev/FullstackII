# 02 — Navegación real con React Router

El Navbar que ya tenemos usa anchors (`#carrito`, `#registro`): react-bootstrap solo le da el estilo, pero el salto es HTML plano dentro de la misma página. Acá agregamos **React Router**, que cambia de vista sin recargar y sí actualiza la URL.

## Pasos

1. Instala React Router:
   ```bash
   npm install react-router-dom
   ```

2. En `src/main.jsx`, envuelve `<App />` en `<BrowserRouter>`:
   ```jsx
   import { StrictMode } from 'react'
   import { createRoot } from 'react-dom/client'
   import { BrowserRouter } from 'react-router-dom'
   import 'bootstrap/dist/css/bootstrap.min.css'
   import App from './App.jsx'

   createRoot(document.getElementById('root')).render(
     <StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </StrictMode>,
   )
   ```

3. En `src/App.jsx`, reemplaza el layout de 3 columnas por rutas — cada componente pasa a ser una vista separada, no las tres a la vez:
   ```jsx
   import { Routes, Route } from 'react-router-dom'
   import { Container } from 'react-bootstrap'
   import Navigation from './components/Navbar'
   import ProductList from './components/ProductList'
   import ShoppingCart from './components/ShoppingCart'
   import RegistrationForm from './components/RegistrationForm'

   function App() {
     return (
       <div className="App">
         <Navigation />
         <Container>
           <Routes>
             <Route path="/" element={<ProductList />} />
             <Route path="/carrito" element={<ShoppingCart />} />
             <Route path="/registro" element={<RegistrationForm />} />
           </Routes>
         </Container>
       </div>
     )
   }

   export default App
   ```

4. En `src/components/Navbar.jsx`, cambia los `href` por `Link` de React Router:
   ```jsx
   import { Navbar, Nav, Container } from 'react-bootstrap'
   import { Link } from 'react-router-dom'

   const Navigation = () => {
     return (
       <Navbar bg="light" expand="lg">
         <Container>
           <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link as={Link} to="/">Productos</Nav.Link>
               <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
               <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     )
   }

   export default Navigation
   ```

   `as={Link} to="/carrito"` le dice a react-bootstrap que en vez de un `<a href="#carrito">` renderice el `Link` de React Router: mismo estilo, pero ahora sí cambia de vista.

✅ **Checkpoint:** con `npm run dev` corriendo, haz clic en "Carrito" y "Registro" — la URL cambia y la página no recarga (no parpadea). Al refrescar (F5) estando en `/carrito`, sigue mostrando el carrito.
