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
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#f2fce4",
    "#fff3ff",
    "#feefea",
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
          {itemBg.length !== 0 &&
            itemBg.map((item, index) => {
              return (
                <div key={index} className="cat_item">
                  <div className="info" style={{ background: item }}>
                    <img src={cake} alt="" />
                    <h5>Cake & Dairies</h5>
                    <p>26 items</p>
                  </div>
                </div>
              );
            })}

          {/* <div className="cat_item">
            <div className="info">
              <img src={drikns} alt="" />
              <h5>Soft Drinks</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={coffee} alt="" />
              <h5>Coffee & Tea</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Snack</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Peach</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={fastFood} alt="" />
              <h5>Fast Food</h5>
              <p>40 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={apple} alt="" />
              <h5>Red Apple</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={fish} alt="" />
              <h5>Fish & Seafood</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Vegatables</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Clothes</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Beauty</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Electronics</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Mobile</h5>
              <p>26 items</p>
            </div>
          </div>
          <div className="cat_item">
            <div className="info">
              <img src={cake} alt="" />
              <h5>Laptop</h5>
              <p>26 items</p>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryTabSlider;
