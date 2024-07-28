// import { Button } from "@mui/material";
import "./MegaDropDownMenu.css";
import { Link } from "react-router-dom";
import offerImage from "../../../assets/images/offer-image.jpg";
import { megaMenuFruitLists } from "../../shared/navbar/navItem";

const MegaDropDownMenu = () => {
  return (
    <div className="mega_dropdown_menu">
      <div className="grid grid-cols-10 w-full gap-8">
        <div className="col-span-2">
          <h4>Fruit & Vegetable</h4>
          <ul>
            {megaMenuFruitLists.map((item, index) => {
              return (
                <li key={index}>
                  <Link>{item.menu}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2">
          <h4>Breakfast & Dairy</h4>
          <ul>
            {megaMenuFruitLists.map((item, index) => {
              return (
                <li key={index}>
                  <Link>{item.menu}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2">
          <h4>Meat & Seafood</h4>
          <ul>
            {megaMenuFruitLists.map((item, index) => {
              return (
                <li key={index}>
                  <Link>{item.menu}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-4">
          <img src={offerImage} alt="" className="rounded-md mega-menu-image" />
        </div>
      </div>
    </div>
  );
};

export default MegaDropDownMenu;
