import { Button } from "@mui/material";
import "./navbar.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Link } from "react-router-dom";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container-fluid ">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-3 flex items-center">
            <Button className="bg-flash categoryTab">
              <GridViewOutlinedIcon /> &nbsp; Browse All Categories{" "}
              <KeyboardArrowDownOutlinedIcon />
            </Button>
          </div>
          <div className="col-span-7">
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
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Vendors <KeyboardArrowDownOutlinedIcon />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Mega Menu <KeyboardArrowDownOutlinedIcon />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Blog <KeyboardArrowDownOutlinedIcon />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages <KeyboardArrowDownOutlinedIcon />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
