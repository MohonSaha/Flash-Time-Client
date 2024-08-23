import "./DailyBest.css";

import banner from "../../../assets/images/add.png";
import Product from "../../../components/shared/Product/Product";
import Slider from "react-slick";

const DailyBest = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 2000,
  };

  return (
    <div className="DailyBest">
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h2 className="sectionHeading mt-0 mb-0">Daily Best Sales</h2>
          <ul className="list-list-inline flex gap-5 filterTab">
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Featured
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Popular
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                New Added
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-12  gap-4 mt-6">
          <div className=" col-span-3">
            <a href="/">
              <img src={banner} alt="" className="bannerImage" />
            </a>
          </div>
          <div className="col-span-9 mt-6">
            <Slider {...settings} className="productSlide">
              <div className="item">
                <Product value={"New"} />
              </div>
              <div className="item">
                <Product value={"Sale"} />
              </div>
              <div className="item">
                <Product value={"New"} />
              </div>
              <div className="item">
                <Product value={"Sale"} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyBest;
