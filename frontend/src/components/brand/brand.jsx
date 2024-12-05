
// brand-carousel-image
import BergerImage1 from "../../images/barger1.jpg";
import BergerImage2 from "../../images/barger2.jpg";
import BergerImage3 from "../../images/barger3.jpg";
import BergerImage4 from "../../images/barger4.jpg";
import Pizza1 from "../../images/pizza3.jpg";

// React-owl-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import "./brand.css";
const brand = () => {

  // Example data to render dynamically
  const slides = [
    { id: 1, image: BergerImage1},
    { id: 2, image: BergerImage2},
    { id: 3, image: BergerImage3},
    { id: 4, image: BergerImage4},
    { id: 5, image: Pizza1},
  ];  

  // Owl Carousel options
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
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
        <OwlCarousel className="owl-theme" {...options}>
          {
            slides.slice(0,4).map((slide) => (
              <div className="item" key={slide.slide}>
                <img src={slide.image} alt="" />
              </div>
            ))
          }
        </OwlCarousel>

        <div className="product-off">
          <h1>
            Grab Upto <span className="text">50%</span> Off
          </h1>
          <h1>on Selected Any Pizza!</h1>
          <a href="#store"> <button className="button">Buy Now</button></a>
        </div>
      </div>
    </>
  );
};

export default brand;



