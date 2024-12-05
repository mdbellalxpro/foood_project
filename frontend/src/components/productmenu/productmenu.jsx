
// React icon 
import { IoIosArrowDown } from "react-icons/io";

import "./productmenu.css"
const productmenu = () => {
  return (
    <>
      <div className="product-menu">
        <div className="item">
          <div className="product-type">
            <a href="#berger"> <h3>Berger</h3></a>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <a href="#store"><h3>Pizza</h3></a>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <a href="#briyani"><h3>Briyani</h3></a>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <a href=""><h3>Review</h3></a>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <a href=""><h3>Filter</h3></a>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <a href=""><h3>All material</h3></a>
            <IoIosArrowDown className="arrow" />
          </div>
        </div>

        <div className="short-by">
          <div className="product-type border border-neutral-300">
            <h3>Short by</h3>
            <IoIosArrowDown className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default productmenu