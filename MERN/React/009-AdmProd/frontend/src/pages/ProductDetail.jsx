import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState(false);
  const [editable, setEditable] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleEdit = () => {
    setEditable((prev) => !prev);
  };

  const handleSubmit = async () => {
    const producto = await Axios.put(
      "http://localhost:5000/api/product/updateProduct/" + id,
      product
    );
    setProduct(producto.data);
    handleEdit();
    // console.log(producto);
    producto.status === 200 && alert("Product Updated");
  };

  const handleDelete = async () => {
    let confirmation = window.confirm(
      "Are you sure you want to delete this product?"
    );
    let producto;
    if (confirmation) {
      producto = await Axios.delete(
        "http://localhost:5000/api/product/deleteProduct/" + id
      );
      if (producto.status === 200) {
        alert("Product Deleted");
        navigate("/products");
      }
    }
  };

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          {/* <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p> */}
          <p>Title:</p>
          <input
            type="text"
            value={product.title}
            name="title"
            onChange={handleChange}
            readOnly={editable}
          />
          <p>Price:</p>
          <input
            type="number"
            value={product.price}
            name="price"
            onChange={handleChange}
            readOnly={editable}
          />
          <p>Description:</p>
          <input
            type="text"
            value={product.description}
            name="description"
            onChange={handleChange}
            readOnly={editable}
          />
          <hr style={{ width: "100px", marginTop: "20px" }} />
          <button
            style={{ width: "120px", marginTop: "20px" }}
            onClick={handleEdit}
            disabled={!editable}
          >
            Edit
          </button>
          <button
            style={{ width: "120px", marginTop: "20px", marginLeft: "15px" }}
            disabled={editable}
            onClick={handleSubmit}
          >
            Submit Edit
          </button>
          <button
            style={{ width: "120px", marginTop: "20px", marginLeft: "15px" }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
