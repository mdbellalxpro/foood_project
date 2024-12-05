
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShopPage() {

  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/items/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [productId]);

  
  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="shop-page">
        <img src={product.image} alt={product.title} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Rating: ⭐ {product.rating}</p>
        <p>Weed Size: {product.weedSize}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopPage;

