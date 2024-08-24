import { Checkbox, IconButton } from "@mui/material";
import "./ProductCartBox.css";
import Counter from "../../shared/Counter/Counter";
import image from "../../../assets/images/p1.jpg";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductCartBox = () => {
  const productName =
    "Symphony v139 Smart Phone RAM 2GB / ROM 32GB - Dual Nano SIM Mobile Phone.";
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="productCartWrapper">
      <div className="grid grid-cols-12 gap-4">
        <div className="checkBox col-span-1 flex items-center">
          <Checkbox {...label} />
        </div>
        <div className="productDetails col-span-7 flex items-center">
          <div className="flex items-center">
            <img src={image} alt="" className="" />
            <div className="productInfo">
              <h5>
                <p className="inline">
                  {expanded ? productName : `${productName.slice(0, 49)} `}
                  <span
                    onClick={toggleExpand}
                    className="toggleExpandButton cursor-pointer text-slate-400"
                  >
                    {expanded ? (
                      <>
                        <span className="expandLessButton">
                          <KeyboardArrowUpOutlinedIcon />
                        </span>
                      </>
                    ) : (
                      <span className="expandButton">
                        <KeyboardArrowDownOutlinedIcon />
                      </span>
                    )}
                  </span>
                </p>
              </h5>
              <p className="clasification">
                Symphony, <span>Storage Capacity: 128GB</span>,
                <span> Color Family: Forest green</span>
              </p>
              <p className="available">Only 6 item(s) in stock</p>
              <div className="offerBox">
                <LocalOfferOutlinedIcon />
                <span>30% Flat Off</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center priceWrapper justify-center">
          <div>
            <h2>$2600</h2>
            <h4>$2900</h4>
            <div className="space-x-2 mt-2">
              <IconButton aria-label="delete" size="small" color="success">
                <FavoriteBorderOutlinedIcon />
              </IconButton>

              <IconButton aria-label="delete" size="small" color="secondary">
                <DeleteForeverOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Counter />
        </div>
        {/* <div className="col-span-1 flex items-center">Price</div> */}
      </div>
    </div>
  );
};

export default ProductCartBox;
