import React, { useEffect, useState } from "react";
import Axios from "axios";
import ListProduct from "../components/ListProducts";

const Products = () => {
  const [products, setProducts] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const productos = await Axios.get(
        "http://localhost:5000/api/product/getProduct"
      );
      // console.log(productos);
      setProducts(productos.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Products</h2>
      {products && <ListProduct items={products} />}
    </div>
  );
};

export default Products;
