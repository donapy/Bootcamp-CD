import React from "react";
import { Link } from "react-router-dom";

const ListAuthors = (props) => {
  // console.log(props);
  return (
    <div>
      {props.items.map((author, key) => {
        return (
          <p key={key}>
            <Link to={"/authors/" + author._id}>{author.title}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default ListAuthors;
