// import { Link, Typography } from "@mui/material";
import "./ProductDetails.css";
import MyBreadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import banner from "../../assets/images/banner1.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import NewProductSidebar from "../../components/shared/NewProductSidebar/NewProductSidebar";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import ProductSlider from "../../components/ui/ProductSlider/ProductSlider";
import { useRef, useState } from "react";
import { colorVariant, ramVariant, sliderImages } from "../../Constant";
import SelectBox from "../../components/ui/SelectBox/SelectBox";
import Counter from "../../components/shared/Counter/Counter";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { CustomTooltip } from "../../components/shared/MyTooltip/MyTooltip";
import Slider from "react-slick";

const ProductDetails = () => {
  const zoomSliderBig = useRef();
  // const [zoomImage, setZoomImage] = useState(
  //   "https://www.jiomart.com/images/product/original/493665925/oneplus-nord-ce-3-lite-5g-256-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493665925-p600340967-0-202304101447.jpeg"
  // );

  // eslint-disable-next-line no-unused-vars
  const [bigImageSize, setBigImageSize] = useState([1000, 1000]);
  // eslint-disable-next-line no-unused-vars
  const [smlImageSize, setSmlImageSize] = useState([150, 150]);

  const breadcrumbsMenu = [
    {
      icon: <HomeOutlinedIcon />,
      menu: "Home",
      link: "/",
    },
    {
      menu: "Product",
      link: "/listing",
    },
    {
      menu: "Details",
      link: "/listing",
    },
    {
      menu: "Current Item",
      link: "/",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    // autoplay: 1000,
  };

  return (
    <div className="detailsPage">
      <div className="container-fluid detailsContainer">
        <div className="my-5">
          <MyBreadcrumbs breadcrumbsMenu={breadcrumbsMenu}></MyBreadcrumbs>
          <hr className="" />
        </div>

        <div className="grid grid-cols-10">
          <div className="col-span-8  productWrapper ">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-5 productZoomWrapper">
                <div className="productZoom mt-4">
                  <Slider
                    {...settings}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                  >
                    {sliderImages.map((item, index) => {
                      return (
                        <div className="item" key={index}>
                          <InnerImageZoom
                            src={`${item?.image}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                            zoomType="hover"
                            className="img"
                          />
                        </div>
                      );
                    })}
                  </Slider>
                </div>

                <div className="productSliderWrapper mt-2">
                  <ProductSlider
                    smlImageSize={smlImageSize}
                    sliderImages={sliderImages}
                    // setZoomImage={setZoomImage}
                    zoomSliderBig={zoomSliderBig}
                  />
                </div>
              </div>
              <div className="col-span-7 productInfo mt-1">
                <div>
                  <h2 className="title">Seeds of Change Organic Quinoe</h2>
                  <div className="flex items-center space-x-2 rattingWrapper">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="ratingNumber">
                      (10 reviews) |{" "}
                      <Link className="text-blue-600">
                        5 Answered Questions
                      </Link>
                    </span>
                  </div>

                  <div className="flex items-center my-6">
                    <h1 className="price">$776.56</h1>
                    <div className="oldPriceWrapper">
                      <small>66% off</small>
                      <h3 className="oldPrice">$2,284.00</h3>
                    </div>
                  </div>

                  <div className="desWrapper">
                    <p>
                      Sold By : <Link>Young Shop</Link>
                    </p>
                    <p className="description">
                      Short Hooded Coat features a straight body, large pockets
                      with button flaps, ventilation air holes, and a string
                      detail along the hemline. Short Hooded Coat features a
                      straight body, large pockets with button flaps,
                      ventilation air holes, and a string detail along the
                      hemline.
                    </p>

                    <div className="sellingOptions mt-2">
                      <p>
                        <WatchLaterOutlinedIcon />1 Year AL Jazeera Brand
                        Warranty
                      </p>
                      <p>
                        <LocalShippingOutlinedIcon />
                        30 Day Return Policy
                      </p>
                      <p>
                        <CreditCardOutlinedIcon />
                        Cash on Delivery available
                      </p>
                    </div>
                  </div>

                  <div className="variantWrapper">
                    <div className="mt-4">
                      <h2>Color Family</h2>
                      <SelectBox variant={colorVariant} />
                    </div>
                    <div className="mt-6">
                      <h2>Storage Capacity</h2>
                      <SelectBox variant={ramVariant} />
                    </div>
                  </div>

                  <div className="counterWrapper mt-8  mb-4 flex items-center gap-5">
                    <Counter />
                    <p className="availablity text-lg text-slate-500">
                      Availability:{" "}
                      <span className="text-blue-600">
                        16 products available
                      </span>
                    </p>
                  </div>

                  <div className="space-x-4 mt-8 cartButtomGroup">
                    <Button className="btn-primary">
                      <ShoppingCartOutlinedIcon />
                      <span className="ml-2">Add to cart</span>
                    </Button>
                    <Button className="btn-primary">Buy New</Button>

                    <CustomTooltip
                      title="Add To Withlist"
                      placement="top"
                      arrow
                    >
                      <Button className="btn-primary-outline btn-move">
                        <FavoriteBorderOutlinedIcon />
                      </Button>
                    </CustomTooltip>

                    <CustomTooltip title="Add To Compare" placement="top" arrow>
                      <Button className="btn-primary-outline btn-move">
                        <CompareArrowsOutlinedIcon />
                      </Button>
                    </CustomTooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Product review tabs */}

            <div className="mt-8 detailsPageTabs mr-8">
              <p>Tabs</p>
            </div>
          </div>
          <div className="col-span-2  sideWrapper">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="mt-10">
              <NewProductSidebar />
            </div>
            <div className="mt-10 banner">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
