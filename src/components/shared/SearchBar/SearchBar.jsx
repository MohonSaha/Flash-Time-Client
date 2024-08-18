import { Button } from "@mui/material";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="col-span-6">
        <div className="headerSearch flex items-center rounded-md">
          <div className="search">
            <input
              type="text"
              className="searchInput"
              placeholder="Search for items..."
            />
            <Button className="searchIcons searchButton">
              <SearchIcon className=" cursor-pointer" icon={false} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
