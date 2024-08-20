/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "./ProductSlider.css";
import { useRef } from "react";
// import image from "../../../assets/images/p1.jpg";

const ProductSlider = ({ smlImageSize, sliderImages, zoomSliderBig }) => {
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

  const goto = (index) => {
    // setZoomImage(imageUrl);
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <div>
      <Slider {...settings} className="productSlider" ref={zoomSlider}>
        {sliderImages.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img
                src={`${item?.image}?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                onClick={() => goto(index)}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
