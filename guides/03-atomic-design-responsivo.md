# 03 — Atomic Design y diseño responsivo

Reorganizamos los componentes siguiendo Atomic Design (átomos → moléculas → organismos) y ajustamos el grid de Bootstrap para que responda mejor en distintos tamaños de pantalla.

## Atomic Design aplicado a la tienda

| Nivel | En nuestra app |
|---|---|
| Átomo | Un botón, un precio, una etiqueta — piezas que no se dividen más |
| Molécula | Una tarjeta de producto (imagen + nombre + precio + botón "Agregar") |
| Organismo | `ProductList` completo (varias tarjetas juntas), el `Navbar` |

## Pasos

1. En el Explorer, crea la estructura dentro de `src/components/`:
   - `atoms/` → `Button.jsx`, `Price.jsx`
   - `molecules/` → `ProductCard.jsx`
   - (Navbar y ProductList quedan como organismos, en `src/components/`)

2. `src/components/atoms/Button.jsx`:
   ```jsx
   const Button = ({ children, onClick, variant = 'primary' }) => (
     <button className={`btn btn-${variant}`} onClick={onClick}>
       {children}
     </button>
   )

   export default Button
   ```

3. `src/components/atoms/Price.jsx`:
   ```jsx
   const Price = ({ amount }) => (
     <span className="fw-bold">${amount.toLocaleString('es-CL')}</span>
   )

   export default Price
   ```

4. `src/components/molecules/ProductCard.jsx`:
   ```jsx
   import { Card } from 'react-bootstrap'
   import Price from '../atoms/Price'
   import Button from '../atoms/Button'

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
   )

   export default ProductCard
   ```

5. En `src/components/ProductList.jsx`, arma una lista de productos de ejemplo y renderiza una `ProductCard` por cada uno, dentro de un grid responsivo:
   ```jsx
   import { Row, Col } from 'react-bootstrap'
   import ProductCard from './molecules/ProductCard'

   const productos = [
     { id: 1, name: 'Zapatillas', price: 29990 },
     { id: 2, name: 'Mochila', price: 15990 },
     { id: 3, name: 'Polera', price: 9990 },
   ]

   const ProductList = () => {
     return (
       <div id="products">
         <h2>Lista de Productos</h2>
         <Row xs={1} sm={2} md={3}>
           {productos.map((p) => (
             <Col key={p.id}>
               <ProductCard name={p.name} price={p.price} onAdd={() => {}} />
             </Col>
           ))}
         </Row>
       </div>
     )
   }

   export default ProductList
   ```

   `xs={1} sm={2} md={3}` es lo que hace responsivo el grid: 1 columna en celular, 2 en tablet, 3 en desktop.

✅ **Checkpoint:** ves 3 tarjetas de producto. Achica la ventana del navegador — las tarjetas pasan de 3 columnas a 2 y luego a 1.
