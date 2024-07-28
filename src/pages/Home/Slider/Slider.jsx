import Slider from "react-slick";
import "./Slider.css";
import slider1 from "../../../assets/images/slider-1.png";
import slider2 from "../../../assets/images/slider-2.png";

const CarouselSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <section className="homeSlider">
      <Slider {...settings} className="slider-container">
        <div className="slider-item">
          <img src={slider1} alt="" />
        </div>
        <div className="slider-item">
          <img src={slider2} alt="" />
        </div>
        <div className="slider-item">
          <img src={slider1} alt="" />
        </div>
      </Slider>
    </section>
  );
};

export default CarouselSlider;
