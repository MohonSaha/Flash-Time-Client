/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "./ProductSlider.css";
import { useRef } from "react";
// import image from "../../../assets/images/p1.jpg";

const ProductSlider = ({ smlImageSize, sliderImages, setZoomImage }) => {
  console.log(sliderImages);
  console.log(smlImageSize);
  const zoomSlider = useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    // autoplay: 2000,
  };

  const goto = (imageUrl) => {
    console.log(imageUrl);
    setZoomImage(imageUrl);
  };

  return (
    <div>
      <Slider {...settings} className="productSlider" ref={zoomSlider}>
        {sliderImages.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img
                // src={`https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-0-202304101447.jpeg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                src={`${item?.image}?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                onClick={() => goto(item?.image)}
              />
            </div>
            // <div className="item">
            //   <img
            //     src="https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-5-202304101447.jpeg?im=Resize=(150,150)"
            //     onClick={() => goto(1)}
            //   />
            // </div>
            // <div className="item">
            //   <img
            //     src="https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-3-202304101447.jpeg?im=Resize=(150,150)"
            //     onClick={() => goto(2)}
            //   />
            // </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
