import "./ServiceBox.css";
import image from "../../../assets/images/service-1.png";

const ServiceBox = () => {
  return (
    <div>
      <div className="serviceBoxWrapper flex  gap-3 items-center">
        <img src={image} alt="" />
        <div className="info">
          <h3>Best prices & offers</h3>
          <p>Orders $50 or more</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
