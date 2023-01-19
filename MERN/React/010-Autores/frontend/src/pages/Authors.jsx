import React, { useEffect, useState } from "react";
import Axios from "axios";
import ListAuthor from "../components/ListAuthors";

const Authors = () => {
  const [authors, setAuthors] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const autores = await Axios.get(
        "http://localhost:5000/api/author/getAuthor"
      );
      // console.log(autores);
      setAuthors(autores.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Authors</h2>
      {authors && <ListAuthor items={authors} />}
    </div>
  );
};

export default Authors;
