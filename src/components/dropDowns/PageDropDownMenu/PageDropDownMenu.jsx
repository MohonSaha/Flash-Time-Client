import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./PageDropDownMenu.css";

const PageDropDownMenu = () => {
  return (
    <div className="page_dropdown_menu">
      <ul>
        <li>
          <Button>
            <Link to="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">About Us</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Contact</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">My Account</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Login</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Register</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Forget Password</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Reset Password</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Purchase Guide</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Privacy Policy</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">Terms of Service</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/about">404 Page</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default PageDropDownMenu;
