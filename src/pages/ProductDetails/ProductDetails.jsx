// import { Link, Typography } from "@mui/material";
import "./ProductDetails.css";
import MyBreadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import banner from "../../assets/images/banner1.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import NewProductSidebar from "../../components/shared/NewProductSidebar/NewProductSidebar";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

const ProductDetails = () => {
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

  return (
    <div className="detailsPage">
      <div className="container-fluid">
        <div className="my-5">
          <MyBreadcrumbs breadcrumbsMenu={breadcrumbsMenu}></MyBreadcrumbs>
          <hr className="" />
        </div>

        <div className="grid grid-cols-10">
          <div className="col-span-8  productWrapper">
            <div className="grid grid-cols-12">
              <div className="col-span-5 productZoom">image</div>
              <div className="col-span-7 productInfo">
                <div>
                  <h2 className="title">Seeds of Change Organic Quinoe</h2>
                  <div className="flex items-center space-x-2 rattingWrapper">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="ratingNumber">(10 reviews)</span>
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
                </div>
              </div>
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
