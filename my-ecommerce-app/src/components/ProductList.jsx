// import { useState } from "react";

const ProductList = ({ productList }) => {
  // const [data, setData] = useState()

  // const handler = () => {
  //   productList.map((item) => {
  //     console.log(item);
  //   });
  // };

  // handler();

  return (
    <div id="products">
      <h2>Lista de Productos</h2>
      <ul>
        {productList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
