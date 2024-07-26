/* eslint-disable react/prop-types */
import { useState } from "react";
import "./select.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

// eslint-disable-next-line react/prop-types
const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectItem, setSelectItem] = useState(placeholder);
  const [listData, setListData] = useState(data);
  // eslint-disable-next-line no-unused-vars
  const [listData2, setListData2] = useState(data);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (e, index) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectItem(e);
  };

  const filterList = (e) => {
    const keyWord = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyWord);
    });

    const uniqueArray = [...new Set(list)];

    // console.log(list);
    setListData(uniqueArray);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDrop cursor-pointer relative">
        {icon}
        <span className="openSelect " onClick={openSelect}>
          {selectItem.length > 18
            ? selectItem.substr(0, 18) + "..."
            : selectItem}
          {isOpenSelect === true ? (
            <ArrowDropUpIcon className="arrow" />
          ) : (
            <ArrowDropDownIcon className="arrow" />
          )}
        </span>

        {isOpenSelect === true && (
          <div className="selectDropdown">
            <div className="dropSearchField">
              <input
                type="text"
                placeholder="Search here..."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => closeSelect(placeholder, 0)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>

              {listData?.map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    onClick={() => closeSelect(item, index + 1)}
                    className={`${selectedIndex === index + 1 ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
