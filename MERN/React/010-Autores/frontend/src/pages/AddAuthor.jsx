import React, { useState } from "react";
import Axios from "axios";

const FormAuthor = () => {
  const [inputs, setInputs] = useState({});
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try {
      result = await Axios.post(
        "http://localhost:5000/api/author/newAuthor",
        inputs
      );
      setAuthor(result.data);
      setInputs({});
      setErrors("");
    } catch (error) {
      setErrors(error.response.data.message);
    }
  };

  return (
    <div id="formCreate">
      <h2>Add New Author</h2>
      <form onSubmit={handleSubmit}>
        <p>Author name</p>
        <input
          type="text"
          name="name"
          placeholder="name..."
          onChange={handleChange}
          value={inputs.name || ""}
        />
        <input type="submit" id="btnFormCreate" />
      </form>
      {author && (
        <>
          <p>Name: {author.name}</p>
        </>
      )}
      {errors && (
        <>
          <p>{errors}</p>
        </>
      )}
    </div>
  );
};

export default FormAuthor;
