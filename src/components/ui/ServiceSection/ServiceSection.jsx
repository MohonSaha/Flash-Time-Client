import ServiceBox from "../../shared/ServiceBox/ServiceBox";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <div className="serviceBoxes">
      <div className="flex gap-5 justify-between">
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </div>
    </div>
  );
};

export default ServiceSection;
