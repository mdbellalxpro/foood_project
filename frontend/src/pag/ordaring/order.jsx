
// import componnent
import Navbar from "../../components/navbar/navbar.jsx";
import OrderingProduct from "../../components/orderproduct/orderprodct";
import ProductPyment from "../../components/orderPyment/orderPymt";
import RelatedProduct from "../../components/relatedproduct/relatetedP.jsx";
import Mobile from "../../components/mobileNav/mobilenav.jsx";

import "./order.css";
const order = () => {

  return (
   <>
   
   <div className="order-container">
      <Navbar/>
      <Mobile/>
      <div className="order">
         <OrderingProduct/>
         <ProductPyment/>
      </div>
      <RelatedProduct/>
   </div>
   
   
   
   </>
  )
}

export default order
