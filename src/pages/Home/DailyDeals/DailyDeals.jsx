import { Link } from "react-router-dom";
import ProductDaily from "../../../components/shared/ProductDaily/ProductDaily";
import "./DailyDeals.css";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const DailyDeals = () => {
  return (
    <div className="DailyDeals">
      <div className="container-fluid">
        <div className="flex justify-between items-center text-slate-600">
          <h2 className="sectionHeading mt-0 mb-0 ">Deals Of The Day</h2>
          <Link className="mr-2">
            <span className="font-semibold">All Deals</span>
            <KeyboardDoubleArrowRightOutlinedIcon className="" />
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-8 ">
          <ProductDaily />
          <ProductDaily />
          <ProductDaily />
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
