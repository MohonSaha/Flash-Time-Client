import "./header.css";
import logo from "../../assets/images/logos/quicktime_01-removebg-preview.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDropdown/Select";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="grid grid-cols-8 items-center justify-center">
            <div className="col-md-2">
              <img src={logo} alt="" width={140} />
            </div>

            <div className="col-span-4">
              <div className="headerSearch flex items-center rounded-sm">
                <Select />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcons cursor-pointer" />
                </div>
              </div>
            </div>

            <div>
              <Select />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
