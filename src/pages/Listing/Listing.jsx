import { Link } from "react-router-dom";
import DailyDeals from "../Home/DailyDeals/DailyDeals";
import "./Listing.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import FilterBar from "../../components/shared/FilterBar/FilterBar";
import NewProductSidebar from "../../components/shared/NewProductSidebar/NewProductSidebar";
import Product from "../../components/shared/Product/Product";
import banner from "../../assets/images/banner1.jpg";
import TopFilter from "../../components/ui/TopFilter/TopFilter";

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
                <div className="sidebar">
                  <Sidebar />
                </div>
                <div className="mt-10">
                  <FilterBar />
                </div>
                <div className="mt-10">
                  <NewProductSidebar />
                </div>
                <div className="mt-10">
                  <img src={banner} alt="" />
                </div>
              </div>
              <div className="col-span-9 right-content">
                <div className="mt-2 mb-10">
                  <TopFilter />
                </div>

                <div className="productRow grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1  gap-4">
                  <div className="item">
                    <Product value={"Hot"} />
                  </div>
                  <div className="item">
                    <Product value={"New"} />
                  </div>
                  <div className="item">
                    <Product value={"Sale"} />
                  </div>
                  <div className="item">
                    <Product value={"Featured"} />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product value={"New"} />
                  </div>
                  <div className="item">
                    <Product value={"Sale"} />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                  <div className="item">
                    <Product value={"Hot"} />
                  </div>
                  <div className="item">
                    <Product value={"New"} />
                  </div>
                  <div className="item">
                    <Product value={"Sale"} />
                  </div>
                  <div className="item">
                    <Product value={"Featured"} />
                  </div>
                  <div className="item">
                    <Product value={"Hot"} />
                  </div>
                  <div className="item">
                    <Product value={"New"} />
                  </div>
                  <div className="item">
                    <Product />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DailyDeals />
    </>
  );
};

export default Listing;
