//importe componentes desde boostrap
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/Navbar";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const productList = ["Pizza", "Hamburguesa", "Sushi", "Vizzio", "Coca colita"];

  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row>
          <Col md={8}>
            <ProductList productList={productList} />
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
