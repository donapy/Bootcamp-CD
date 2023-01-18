import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const producto = await Axios.get(
        "http://localhost:5000/api/product/getProduct/" + id
      );
      //   console.log(producto);
      setProduct(producto.data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
