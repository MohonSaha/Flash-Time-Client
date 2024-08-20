import { Button, Rating } from "@mui/material";
import "./MyTabs.css";
import { productInfo } from "../../../Constant";
import { useState } from "react";
import vendor from "../../../assets/images/profile-2.png";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";

const MyTabs = () => {
  const [activeTabs, setActiveTabs] = useState(1);
  return (
    <div className="customTabs">
      <ul className="list-inline">
        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(0)}>
            Description
          </Button>
        </li>

        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(1)}>
            Vendor
          </Button>
        </li>
        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(2)}>
            Reviews(5)
          </Button>
        </li>
        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(3)}>
            Questions and Answers
          </Button>
        </li>
      </ul>

      {activeTabs === 0 && (
        <div className="tabContent">
          <p>
            Short Hooded Coat features a straight body, large pockets with
            button flaps, ventilation air holes, and a string detail along the
            hemline. The style is completed with a drawstring hood, featuring
            Rains signature built-in cap. Made from waterproof, matte PU, this
            lightweight unisex rain jacket is an ode to nostalgia through its
            classic silhouette and utilitarian design details.
          </p>
          <ul className="two-column-list">
            {productInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>

          <br />
          <h2>Packaging and Delivary</h2>
          <p>
            Short Hooded Coat features a straight body, large pockets with
            button flaps, ventilation air holes, and a string detail along the
            hemline. The style is completed with a drawstring hood, featuring
            Rains signature built-in cap. Made from waterproof, matte PU, this
            lightweight unisex rain jacket is an ode to nostalgia through its
            classic silhouette and utilitarian design details.
          </p>
        </div>
      )}

      {activeTabs === 1 && (
        <div className="tabContent vendorInfo">
          <div className="flex items-center gap-4">
            <img src={vendor} alt="" />
            <div>
              <h4>Mohon Saha</h4>
              <div className="flex items-center space-x-2 rattingWrapper">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <span className="ratingNumber text-slate-500">
                  (10 reviews)
                </span>
              </div>
              <p>Mall / Certified Store</p>
            </div>
          </div>

          <div className="vendorReview flex mt-2">
            <div>
              <p>Positive Seller Ratings</p>
              <h1>90%</h1>
            </div>
            <div>
              <p>Ship on Time</p>
              <h1>89%</h1>
            </div>
            <div>
              <p>Chat Response Rate</p>
              <h1>68%</h1>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <Link>
              <ForumIcon />
              Chat Now
            </Link>
            <Link>Go To Store</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTabs;
