import "./ProductsTop.css";
import image from "../../../assets/images/papaya.jpg";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsTop = () => {
  return (
    <div className="topSelling_box">
      <Link>
        <div className="productItems flex items-center gap-4">
          <img src={image} alt="" />

          <div>
            <h5>Angies Boomchickapop Fresh Fruits</h5>
            <div className="flex items-center space-x-2 rattingWrapper">
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
              <span className="ratingNumber">(2.5)</span>
            </div>

            <div className="flex gap-2 mt-1.5">
              <p className="price">$560</p>
              <p className="oldPrice">$860</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsTop;
