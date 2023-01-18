import React from "react";
import { Link } from "react-router-dom";

const ListProducts = (props) => {
  // console.log(props);
  return (
    <div>
      {props.items.map((product, key) => {
        return (
          <p key={key}>
            <Link to={"/products/" + product._id}>{product.title}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default ListProducts;
