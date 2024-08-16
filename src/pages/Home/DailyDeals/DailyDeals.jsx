import ProductDaily from "../../../components/shared/ProductDaily/ProductDaily";
import "./DailyDeals.css";

const DailyDeals = () => {
  return (
    <div className="DailyDeals">
      <div className="container-fluid">
        <h2 className="sectionHeading mt-0 mb-0">Deals Of The Day</h2>

        <div className="grid grid-cols-3 mt-6 gap-8 ">
          <ProductDaily />
          <ProductDaily />
          <ProductDaily />
          <ProductDaily />
          <ProductDaily />
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
