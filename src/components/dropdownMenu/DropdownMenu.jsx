/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import "./dropdownMenu.css";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const DropdownMenu = ({ width, menuItem, setIsOpenDropDown, closeOutside }) => {
  const DropdownStyle = {
    width: width,
  };

  console.log(menuItem);

  return (
    <ClickAwayListener onClickAway={() => setIsOpenDropDown(!closeOutside)}>
      <ul className="dropdownMenu" style={DropdownStyle}>
        {menuItem.map((item, index) => {
          return (
            <li key={index}>
              <Button onClick={() => setIsOpenDropDown(false)}>
                {item?.icon} {item?.menu}
              </Button>
            </li>
          );
        })}
      </ul>
    </ClickAwayListener>
  );
};

export default DropdownMenu;
