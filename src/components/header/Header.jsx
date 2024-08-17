import "./header.css";
import logo from "../../assets/images/logos/logo-2.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDropdown/Select";
import { useEffect, useRef, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Navbar from "../shared/navbar/Navbar";

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

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

  const accountMenuLists = [
    { menu: "My Account", icon: <PermIdentityOutlinedIcon /> },
    {
      menu: "Order Tracking",
      icon: <LocationOnOutlinedIcon />,
    },
    {
      menu: "My Voucher",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      menu: "My Wishlist",
      icon: <FavoriteBorderIcon />,
    },
    { menu: "Setting", icon: <SettingsOutlinedIcon /> },
    { menu: "Sign Out", icon: <LogoutOutlinedIcon /> },
  ];

  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(categoriesNames);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countriesList = [
    "Afghanistan",
    "Bangladesh",
    "Bhutan",
    "India",
    "Maldives",
    "Nepal",
    "Pakistan",
    "Sri Lanka",
  ];

  // useEffect(() => {
  //   const getCountry = async (url) => {
  //     try {
  //       const response = await fetch(url);
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data.data); // Adjusted to match the API response structure
  //         data.data.map((item) => {
  //           countriesList.push(item.country);
  //         });
  //       } else {
  //         console.error("Network response was not ok");
  //       }
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };

  //   getCountry("https://countriesnow.space/api/v0.1/countries/");
  // }, [countriesList]);

  return (
    <>
      <div ref={headerRef} className="headerWrapper">
        <header>
          <div className="container-fluid">
            <div className="grid grid-cols-12 items-center justify-center gap-4">
              <div className="">
                <img src={logo} alt="" width={80} />
              </div>

              <div className="col-span-6">
                <div className="headerSearch flex items-center rounded-md">
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
                <div className="ml-auto flex items-center">
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
                          style={{ fontSize: 24 }}
                          className="mb-2"
                        />
                        <span className="badge">3</span>
                        Compare
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="flex items-center">
                        <FavoriteBorderIcon
                          style={{ fontSize: 24 }}
                          className="mb-2"
                        />
                        <span className="badge">3</span>
                        Wishlist
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="flex items-center font-medium">
                        <ShoppingCartOutlinedIcon
                          style={{ fontSize: 24 }}
                          className="mb-1"
                        />
                        <span className="badge">30</span>
                        Cart
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span
                        className="flex items-center"
                        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                      >
                        <PermIdentityOutlinedIcon
                          style={{ fontSize: 24 }}
                          className="mb-2"
                        />
                        Account
                      </span>
                      {isOpenDropDown !== false && (
                        <DropdownMenu
                          width={"180px"}
                          menuItem={accountMenuLists}
                          setIsOpenDropDown={setIsOpenDropDown}
                          closeOutside={true}
                        />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
