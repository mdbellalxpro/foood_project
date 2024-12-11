

// React-owl-carousel
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// carousel image 
import Image1 from "../../images/barger1.jpg";
import Image2 from "../../images/barger2.jpg";
import Image3 from "../../images/barger3.jpg";
import Image4 from "../../images/barger4.jpg";
import Image5 from "../../images/pizza3.jpg";

import "./brand.css";
const brand = () => {


  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplaySpeed: 10,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  return (
    <>
      <div className="brand-container">
        <div>
          <OwlCarousel {...options}>
            <div className="item">
              <img src={Image1} alt="" />
            </div>
            <div className="item">
              <img src={Image2} alt="" />
            </div>
            <div className="item">
              <img src={Image3} alt="" />
            </div>
            <div className="item">
              <img src={Image4} alt="" />
            </div>
            <div className="item">
              <img src={Image5} alt="" />
            </div>
          </OwlCarousel>
        </div>

        <div className="product-off">
          <h1>
            Grab Upto <span className="text">50%</span> Off
          </h1>
          <h1>on Selected Any Pizza!</h1>
          <a href="#store">
            {" "}
            <button className="button">Buy Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default brand;
