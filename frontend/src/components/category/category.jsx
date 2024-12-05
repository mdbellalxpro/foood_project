import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./category.css";
const category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/items/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="category-container">
      {products.slice(1, 4).map((product) => (
        <div key={product._id} className="main-category">
          <div className="category-item">
            <Link to={`/shop/${product._id}`}>
              <img src={product.image} alt="" />
            </Link>
            <div className="category-details">
              <div className="left">
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
              </div>
              <div>
                <p>{product.price}</p>
                <p>{product.size}</p>
                <p>{product.weedData}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default category;
