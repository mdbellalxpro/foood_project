
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// React-owl-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// image import 
import Pizza1 from "../../images/pizza1.jpg"
import Pizza2 from "../../images/pizza2.jpg"
import Pizza3 from "../../images/pizza3.jpg"
import Pizza4 from "../../images/pizza4.jpg"

import Berger1 from "../../images/barger1.jpg"
import Berger2 from "../../images/barger2.jpg"
import Berger3 from "../../images/barger3.jpg"
import Berger4 from "../../images/barger4.jpg"

import Briyani from "../../images/briyani.jpeg"
import Briyani1 from "../../images/briyani1.jpeg"
import Briyani2 from "../../images/briyani2.jpeg"
import Briyani3 from "../../images/briyani3.jpeg"

// import react icon
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import "./relatedP.css";
const relatetedP = () => {

  const carouselRef = useRef(null);

  const option = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots:false,
    autoplaySpeed: 3000,
    responsive: {
     300: {items:1},
     400:{items:1},
     600: {items: 2},
     900: {items: 3},
     1100: {items:4},
    },

  }

  return(
  <>

     <div className="relateted-product-container">
        <h1>Related Products !</h1>

        {/* Custom Navigation Buttons */}
        <button
          className="custom-nav-btn prev-btn"
          onClick={() => carouselRef.current.prev()}
        >
          <FaArrowLeft size={20} />
        </button>

        <OwlCarousel ref={carouselRef}  className="owl-theme" {...option}>

          <div className="item-carousel">
            <img src={Pizza1} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Pizza2} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Pizza3} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Pizza4} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Berger1} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Berger2} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Berger3} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Berger4} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Briyani} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Briyani1} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Briyani2} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src={Briyani3} alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>
        </OwlCarousel>
        
        <button
          className="custom-nav-btn next-btn"
          onClick={() => carouselRef.current.next()}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
  </>
    
  )
};

export default relatetedP;
  