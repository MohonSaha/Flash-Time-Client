import Slider from "react-slick";
import "./Slider.css";
import slider1 from "../../../assets/images/slider-1.png";
import slider2 from "../../../assets/images/slider-2.png";
import { Button } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const CarouselSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid relative">
        <Slider {...settings} className="slider-container">
          <div className="slider-item">
            <img src={slider1} alt="" />
            <div className="info">
              <h2 className="mb-4">
                Don&apos;t miss amazing <br />
                Grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="slider-item">
            <img src={slider2} alt="" />
            <div className="info">
              <h2 className="mb-4">
                Fresh vegetables <br />
                Big discount
              </h2>
              <p>Save up to 50% off on your first order</p>
            </div>
          </div>
        </Slider>

        <div className="newsLetter">
          <SendOutlinedIcon />
          <input type="text" placeholder="Your email address" />
          <Button className="bg-flash categoryTab">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSlider;
