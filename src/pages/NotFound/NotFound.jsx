import "./NotFound.css";
import image from "../../assets/images/not-found.png";
import { Link } from "react-router-dom";
import SearchBar from "../../components/shared/SearchBar/SearchBar";
import { Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container-fluid">
          <div className="box">
            <img src={image} alt="" />
            <br />
            <h1>Page Not Found</h1>
            <br />
            <p>
              The link you clicked may be broken or the page may have been
              removed. visit the <Link to="/">Homepage</Link> or{" "}
              <Link>Contact us</Link> about the problem.
            </p>

            <div className="my-5 w-2/3 mx-auto">
              <SearchBar />
            </div>

            <Link to="./">
              <Button className="bg-flash flex items-center">
                <HomeOutlinedIcon />
                <span className="ml-2">Back to Home Page</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
