import { Button } from "@mui/material";
import "./navbar.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PageDropDownMenu from "../../dropDowns/PageDropDownMenu/PageDropDownMenu";
import MegaDropDownMenu from "../../dropDowns/MegaDropDownMenu/MegaDropDownMenu";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="container-fluid ">
          <div className="grid grid-cols-12 w-full gap-4 relative">
            <div className="col-span-3 flex items-center">
              <Button className="bg-flash categoryTab">
                <GridViewOutlinedIcon /> &nbsp; Browse All Categories{" "}
                <KeyboardArrowDownOutlinedIcon />
              </Button>
            </div>
            <div className="col-span-7 nav-container">
              <nav>
                <ul className="list flex nav-list mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link>Home</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>About</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        Shop <KeyboardArrowDownOutlinedIcon />
                      </Link>
                    </Button>

                    <PageDropDownMenu />
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        Vendors <KeyboardArrowDownOutlinedIcon />
                      </Link>
                    </Button>

                    <PageDropDownMenu />
                  </li>
                  <li className="list-inline-item mega_menu_container">
                    <Button>
                      <Link>
                        Mega Menu <KeyboardArrowDownOutlinedIcon />
                      </Link>
                    </Button>

                    <MegaDropDownMenu />
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        Blog <KeyboardArrowDownOutlinedIcon />
                      </Link>
                    </Button>

                    <PageDropDownMenu />
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>
                        Pages <KeyboardArrowDownOutlinedIcon />
                      </Link>
                    </Button>

                    <PageDropDownMenu />
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Contact</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-2 flex items-center justify-end">
              <div className="phoneNo flex items-center justify-end">
                <span>
                  <HeadsetMicOutlinedIcon className="text-4xl" />
                </span>
                <div className="ml-3 ">
                  <h3 className="text-flash font-semibold text-xl mb-0">
                    01609-195463
                  </h3>
                  <small className="">24/7 Support Canter</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
