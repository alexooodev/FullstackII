import { Card } from "react-bootstrap";
import Price from "../atoms/Price";
import Button from "../atoms/Button";

const ProductCard = ({ name, price, onAdd }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Price amount={price} />
      <div className="mt-2">
        <Button onClick={onAdd}>Agregar al carrito</Button>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
