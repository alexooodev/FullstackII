import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navbar";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import RegistrationForm from "./components/RegistrationForm";

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
  );
}

export default App;
