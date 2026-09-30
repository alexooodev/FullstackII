//importe componentes desde boostrap
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/Navbar";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  // const navegationItems = ["Inicio", "Productos", "Carrito", "Registro"];
  const navegationItems = [
    {
      link: "#home",
      text: "Home",
    },
    {
      link: "#products",
      text: "Productos",
    },
    {
      link: "#cart",
      text: "Carro",
    },
    {
      link: "#register",
      text: "Registro",
    },
  ];

  return (
    <div className="App">
      <Navigation navegationItems={navegationItems} />
      <Container>
        <Row>
          <Col md={8}>
            <ProductList />
          </Col>
          <Col md={4}>
            <ShoppingCart />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <RegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
