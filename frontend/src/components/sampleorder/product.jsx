import { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";

import { Link } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/items/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);



  return (
    <div className="shop-page">
      <h1>Berger</h1>
      <div className="product-grid">
        {products.slice(0,4).map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Rating: ⭐ {product.rating}</p>
            <p>Weed Size: {product.weedSize}</p>
            <Link to={`/shop/${product._id}`}>
             <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="product-grid">
        {products.slice(4,8).map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Rating: ⭐ {product.rating}</p>
            <p>Weed Size: {product.weedSize}</p>
            <Link to={`/shop/${product._id}`}>
             <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="product-grid">
        {products.slice(8,12).map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Rating: ⭐ {product.rating}</p>
            <p>Weed Size: {product.weedSize}</p>
            <Link to={`/shop/${product._id}`}>
             <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;


  



