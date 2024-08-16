import "./footer.css";
import logo from "../../../assets/images/logos/logo-2.png";
import { Link } from "react-router-dom";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import app1 from "../../../assets/images/app-1.jpg";
import app2 from "../../../assets/images/app-2.jpg";
import payment from "../../../assets/images/payment-1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="container-fluid">
          <div className="grid grid-cols-12">
            <div className="col-span-3 left-box">
              <div className="flex items-center">
                <Link>
                  <img src={logo} alt="" className="mr-3" />
                </Link>
                <h1 className="companyName">
                  <span>F</span>lash <span>T</span>ime
                </h1>
              </div>
              <br />
              <p>Awesome grocery store website template</p>
              <br />
              <div className="space-y-3 address">
                <p>
                  <LocationOnOutlinedIcon />
                  <strong>Address:</strong> 5171 W Campbell Ave undefined Kent,
                  Utah 53127 United States
                </p>
                <p>
                  <HeadphonesOutlinedIcon />
                  <strong>Call Us:</strong> (+91) - 540-025-124553
                </p>
                <p>
                  <EmailOutlinedIcon />
                  <strong>Email:</strong> mohonsaha108@gmail.com
                </p>
                <p>
                  <AvTimerOutlinedIcon />
                  <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
                </p>
              </div>
            </div>
            <div className="col-span-6 middle-box mt-7">
              <div className="grid grid-cols-3">
                <div>
                  <h3>Company</h3>
                  <ul className="mb-ms-5 mb-md-0 footer-list space-y-3">
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Affiliate</Link>
                    </li>
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                    <li>
                      <Link to="/">Join Us</Link>
                    </li>
                    <li>
                      <Link to="/">Attend Program</Link>
                    </li>
                    <li>
                      <Link to="/">Review</Link>
                    </li>
                    <li>
                      <Link to="/">Support System</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Account</h3>
                  <ul className="mb-ms-5 mb-md-0 footer-list space-y-3">
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Affiliate</Link>
                    </li>
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                    <li>
                      <Link to="/">Join Us</Link>
                    </li>
                    <li>
                      <Link to="/">Attend Program</Link>
                    </li>
                    <li>
                      <Link to="/">Review</Link>
                    </li>
                    <li>
                      <Link to="/">Support System</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Coparate</h3>
                  <ul className="mb-ms-5 mb-md-0 footer-list space-y-3">
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Affiliate</Link>
                    </li>
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                    <li>
                      <Link to="/">Join Us</Link>
                    </li>
                    <li>
                      <Link to="/">Attend Program</Link>
                    </li>
                    <li>
                      <Link to="/">Review</Link>
                    </li>
                    <li>
                      <Link to="/">Support System</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-3 right-box mt-7">
              <h3>Install App</h3>
              <br />
              <p>From App Store or Google Play</p>
              <div className="flex gap-4 mt-4 mb-5">
                <Link>
                  <img src={app1} alt="" />
                </Link>
                <Link>
                  <img src={app2} alt="" />
                </Link>
              </div>

              <p>Secured Payment Gateways</p>
              <br />
              <div>
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
