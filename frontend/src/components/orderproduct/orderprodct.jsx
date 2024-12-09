import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// import category
import Category from "../../components/category/category";

import "./orderproduct.css";
const orderprodct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://foood-project-backend.onrender.com/api/items/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return <h1></h1>;
  }

  return (
    <>
      <div className="orderprodct-container">
        <div className="orderproduct">
          <img
            src={product.image}
            alt="Product"
            className="main-product-image"
          />
        </div>

        <div className="showing-product">
          <div className="order-item">
            <img src={product.image} alt="" />
          </div>

          <Category />
        </div>
      </div>
    </>
  );
};

export default orderprodct;
