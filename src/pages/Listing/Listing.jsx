import { Link } from "react-router-dom";
import DailyDeals from "../Home/DailyDeals/DailyDeals";
import "./Listing.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import FilterBar from "../../components/shared/FilterBar/FilterBar";
import NewProductSidebar from "../../components/shared/NewProductSidebar/NewProductSidebar";

const Listing = () => {
  return (
    <>
      <div className="listingPage">
        <div className="container-fluid">
          <div className="breadcrumb mb-10">
            <h1>Snack</h1>
            <ul className="flex space-x-3 items-center">
              <li>
                <Link className="flex space-x-[2px] items-center">
                  <HomeOutlinedIcon />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link>Shop</Link>
              </li>
              <li>
                <Link>Snack</Link>
              </li>
            </ul>
          </div>

          <div className="listingData">
            <div className="grid grid-cols-12">
              <div className="col-span-3 sidebarWrapper">
                <Sidebar />
                <div className="mt-10">
                  <FilterBar />
                </div>
                <div className="mt-10">
                  <NewProductSidebar />
                </div>
              </div>
              <div className="col-span-9 right-content"></div>
            </div>
          </div>
        </div>
      </div>
      <DailyDeals />
    </>
  );
};

export default Listing;
