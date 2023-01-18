import React, { useState } from "react";
import Axios from "axios";

const FormProduct = () => {
  const [inputs, setInputs] = useState({});
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Axios.post(
      "http://localhost:5000/api/product/newProduct",
      inputs
    );
    // console.log(result.data);
    setProduct(result.data);
    setInputs({});
  };

  return (
    <div id="formCreate">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          type="text"
          name="title"
          placeholder="title..."
          onChange={handleChange}
          value={inputs.title || ""}
        />
        <p>Price</p>
        <input
          type="number"
          placeholder="price..."
          name="price"
          value={inputs.price || ""}
          onChange={handleChange}
        />
        <p>Description</p>
        <input
          type="text"
          placeholder="description..."
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
        />
        <input type="submit" id="btnFormCreate" />
      </form>
      {product && (
        <>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </>
      )}
    </div>
  );
};

export default FormProduct;
