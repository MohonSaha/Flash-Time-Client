import "./header.css";
import logo from "../../assets/images/logos/quicktime_01-removebg-preview.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDropdown/Select";
import { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const Header = () => {
  const categoriesNames = [
    "Clothing and Beauty",
    "Soft Drinks",
    "Fish and Seafood",
    "Pet food & toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh fruit",
    "Bread and juice",
    "Milk and Dairies",
    "Soft Drinks",
    "Clothing and Beauty",
    "Fish and Seafood",
    "Fast food",
    "Pet food & toy",
  ];

  const [categories, setCategories] = useState(categoriesNames);

  const countriesList = [];

  useEffect(() => {
    const getCountry = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data.data); // Adjusted to match the API response structure
          data.data.map((item) => {
            countriesList.push(item.country);
          });
        } else {
          console.error("Network response was not ok");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, [countriesList]);

  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="grid grid-cols-10 items-center justify-center gap-5">
            <div className="">
              <img src={logo} alt="" width={190} />
            </div>

            <div className="col-span-4">
              <div className="headerSearch flex items-center rounded-sm">
                <Select data={categories} placeholder={"All Categories"} />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon
                    className="searchIcons cursor-pointer"
                    icon={false}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-5 flex items-center">
              <div className=" flex items-center">
                <div className="countryWrapper">
                  <Select
                    data={countriesList}
                    placeholder={"Your Location"}
                    icon={
                      <LocationOnOutlinedIcon
                        style={{ opacity: 0.6, fontSize: 18, marginRight: 3 }}
                      />
                    }
                  />
                </div>

                <ul className="list list-inline mb-0 headerTabs flex items-center">
                  <li className="list-inline-item">
                    <span className="flex items-center">
                      <SwapHorizontalCircleOutlinedIcon
                        style={{ fontSize: 22 }}
                        className="mr-3"
                      />
                      <span className="badge">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="flex items-center">
                      <FavoriteBorderIcon
                        style={{ fontSize: 22 }}
                        className="mr-3"
                      />
                      <span className="badge">3</span>
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="flex items-center">
                      <ShoppingCartOutlinedIcon
                        style={{ fontSize: 22 }}
                        className="mr-3"
                      />
                      <span className="badge">30</span>
                      Cart
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="flex items-center">
                      <PermIdentityOutlinedIcon
                        style={{ fontSize: 22 }}
                        className="mr-3"
                      />
                      Account
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
