/* eslint-disable no-unused-vars */
import "./CategoryTabSlider.css";
import Slider from "react-slick";
import cake from "../../../assets/images/cake.png";
import drikns from "../../../assets/images/drikns.png";
import coffee from "../../../assets/images/coffee.png";
import fish from "../../../assets/images/fish.png";
import fastFood from "../../../assets/images/fast-food.png";
import apple from "../../../assets/images/apple.png";
import { useState } from "react";

const CategoryTabSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  const categoryItems = [
    {
      item: "Coffee & Tea",
      image: coffee,
      available: "26 items",
      bg: "#fffceb",
    },
    {
      item: "Fast Food",
      image: fastFood,
      available: "26 items",
      bg: "#ecffec",
    },
    {
      item: "Red Apple",
      image: apple,
      available: "26 items",
      bg: "#feefea",
    },
    {
      item: "Fish & Seafood",
      image: fish,
      available: "26 items",
      bg: "#f2fce4",
    },
    {
      item: "Soft Drinks",
      image: drikns,
      available: "26 items",
      bg: "#fff3ff",
    },
    {
      item: "Cake & Dairies",
      image: cake,
      available: "26 items",
      bg: "#feefea",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  return (
    <div className="categorySliderSection">
      <div className="container-fluid">
        <h2 className="sectionHeading">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_main">
          {categoryItems.map((item, index) => {
            return (
              <div key={index} className="cat_item">
                <div
                  key={index}
                  className="info"
                  style={{ background: item.bg }}
                >
                  <img src={item.image} alt="" />
                  <h5>Cake & Dairies</h5>
                  <p>26 items</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryTabSlider;
