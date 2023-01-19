import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const AuthorDetail = () => {
  const [author, setAuthor] = useState(false);
  const [editable, setEditable] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const autor = await Axios.get(
        "http://localhost:5000/api/author/getAuthor/" + id
      );
      //   console.log(autor);
      setAuthor(autor.data);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAuthor((values) => ({ ...values, [name]: value }));
  };

  const handleEdit = () => {
    setEditable((prev) => !prev);
  };

  const handleSubmit = async () => {
    const autor = await Axios.put(
      "http://localhost:5000/api/author/updateAuthor/" + id,
      author
    );
    setAuthor(autor.data);
    handleEdit();
    // console.log(producto);
    autor.status === 200 && alert("Author Updated");
  };

  const handleDelete = async () => {
    let confirmation = window.confirm(
      "Are you sure you want to delete this author?"
    );
    let autor;
    if (confirmation) {
      autor = await Axios.delete(
        "http://localhost:5000/api/author/deleteAuthor/" + id
      );
      if (autor.status === 200) {
        alert("Author Deleted");
        navigate("/authors");
      }
    }
  };

  return (
    <div>
      <h2>Author Details</h2>
      {author && (
        <div>
          {/* <p>{author.title}</p>
          <p>{author.price}</p>
          <p>{author.description}</p> */}
          <p>Title:</p>
          <input
            type="text"
            value={author.title}
            name="title"
            onChange={handleChange}
            readOnly={editable}
          />
          <p>Price:</p>
          <input
            type="number"
            value={author.price}
            name="price"
            onChange={handleChange}
            readOnly={editable}
          />
          <p>Description:</p>
          <input
            type="text"
            value={author.description}
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

export default AuthorDetail;
