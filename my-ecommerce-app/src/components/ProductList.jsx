import { Row, Col } from "react-bootstrap";
import ProductCard from "./molecules/ProductCard";

const productos = [
  { id: 1, name: "Zapatillas", price: 29990 },
  { id: 2, name: "Mochila", price: 15990 },
  { id: 3, name: "Polera", price: 9990 },
];

const ProductList = () => {
  const agregarAlCarrito = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    localStorage.setItem("carrito", JSON.stringify([...carritoActual, producto]));
  };

  return (
    <div id="products">
      <h2>Lista de Productos</h2>
      <Row xs={1} sm={2} md={3}>
        {productos.map((p) => (
          <Col key={p.id}>
            <ProductCard name={p.name} price={p.price} onAdd={() => agregarAlCarrito(p)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
