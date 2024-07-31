import "./Banner.css";
import b1 from "../../../assets/images/b1.png";
import b2 from "../../../assets/images/b2.png";
import b3 from "../../../assets/images/b3.png";

const Banner = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="flex gap-8">
          <div className="box">
            <img src={b1} alt="" className="myTransition w-full" />
          </div>
          <div className="box">
            <img src={b2} alt="" className="myTransition w-full" />
          </div>
          <div className="box">
            <img src={b3} alt="" className="myTransition w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
