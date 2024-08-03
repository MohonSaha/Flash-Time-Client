import "./Product.css";
import p1 from "../../../assets/images/p1.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Product = () => {
  return (
    <div className="productThumb">
      <div className="imageWrapper">
        <img src={p1} alt="" />
      </div>
      <div className="info">
        <span className="block catName">Snack</span>
        <h4 className="title">
          <Link>Angies Boomchickapop Sweet & Salty Kettle Corn</Link>
        </h4>
        <div className="flex items-center space-x-2 rattingWrapper">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <span className="ratingNumber">(2.5)</span>
        </div>
        <span className="brand block">
          By <Link>FlashTime</Link>
        </span>

        <div className="flex items-center mt-3">
          <div className="flex items-center">
            <span className="price font-bold">৳80</span>
            <span className="oldPrice">৳100</span>
          </div>

          <div className="ml-auto">
            <Button className="bg-flash myTransition">
              <ShoppingCartOutlinedIcon /> Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
