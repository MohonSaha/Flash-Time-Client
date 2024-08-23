import Slider from "react-slick";
import "./RelatedProduct.css";
import Product from "../Product/Product";

const RelatedProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 2000,
  };

  return (
    <div className="relatedProduct">
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h2 className="sectionHeading mt-0 mb-0 ml-4">Related products</h2>
        </div>

        <div className=" mt-2">
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
  );
};

export default RelatedProduct;
