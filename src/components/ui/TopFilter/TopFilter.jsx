import { Button } from "@mui/material";
import "./TopFilter.css";
import DropdownMenu from "../../dropdownMenu/DropdownMenu";
import { useState } from "react";
import { filterMenuLists, paginationMenuLists } from "../../../Constant";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

const TopFilter = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-xl">
          We found <span className="text-green-600 font-semibold">6</span> items
          for you!
        </p>

        <div className="topFilterWrapper flex gap-3">
          <div className="tab_">
            <Button
              className="btn-outline-gray"
              onClick={() => setIsOpenDropDown(!isOpenDropDown)}
            >
              <GridViewOutlinedIcon className="mr-1" />
              Show: 25
            </Button>
            {isOpenDropDown !== false && (
              <DropdownMenu
                width={"120px"}
                menuItem={paginationMenuLists}
                setIsOpenDropDown={setIsOpenDropDown}
                closeOutside={false}
              />
            )}
          </div>

          <div className="tab_">
            <Button
              className="btn-outline-gray"
              onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
            >
              <FilterListOutlinedIcon className="mr-1" />
              Sort By: Featured
            </Button>

            {isOpenDropDown2 !== false && (
              <DropdownMenu
                width={"180px"}
                menuItem={filterMenuLists}
                setIsOpenDropDown={setIsOpenDropDown2}
                closeOutside={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
