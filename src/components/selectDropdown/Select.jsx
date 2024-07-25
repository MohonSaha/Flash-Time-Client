import { useState } from "react";
import "./select.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectItem, setSelectItem] = useState("All Categories");

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (e, index) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectItem(e);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDrop cursor-pointer relative">
        <span className="openSelect " onClick={openSelect}>
          {selectItem}
          {isOpenSelect === true ? (
            <ArrowDropUpIcon className="arrow" />
          ) : (
            <ArrowDropDownIcon className="arrow" />
          )}
        </span>

        {isOpenSelect === true && (
          <div className="selectDropdown">
            <div className="dropSearchField">
              <input type="text" placeholder="Search here..." />
            </div>
            <ul className="searchResults">
              <li
                onClick={() => closeSelect("All Categories", 0)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                All Categories
              </li>
              <li
                onClick={() => closeSelect("Clothing and Beauty", 1)}
                className={`${selectedIndex === 1 ? "active" : ""}`}
              >
                Clothing and Beauty
              </li>
              <li
                onClick={() => closeSelect("Soft Drinks", 2)}
                className={`${selectedIndex === 2 ? "active" : ""}`}
              >
                Soft Drinks
              </li>
              <li
                onClick={() => closeSelect(3)}
                className={`${selectedIndex === 3 ? "active" : ""}`}
              >
                Fish and Seafood
              </li>
              <li onClick={() => closeSelect(4)}>Pet food & toy</li>
              <li onClick={() => closeSelect(5)}>Fast food</li>
              <li onClick={() => closeSelect(6)}>Baking material</li>
              <li onClick={() => closeSelect(7)}>Vegetables</li>
              <li onClick={() => closeSelect(8)}>Fresh fruit</li>
              <li onClick={() => closeSelect(9)}>Bread and juice</li>
              <li onClick={() => closeSelect(10)}>Milk and Dairies</li>
              <li onClick={() => closeSelect(11)}>Soft Drinks</li>
              <li onClick={() => closeSelect(12)}>Clothing and Beauty</li>
              <li onClick={() => closeSelect(13)}>Fish and Seafood</li>
              <li onClick={() => closeSelect(14)}>Fast food</li>
              <li onClick={() => closeSelect(15)}>Pet food & toy</li>
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
