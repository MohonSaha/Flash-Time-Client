import ServiceSection from "../../../components/ui/ServiceSection/ServiceSection";
import Banner from "../../../components/ui/Banner/Banner";
import CategoryTabSlider from "../../../components/ui/CategoryTabSlider/CategoryTabSlider";
import CarouselSlider from "../../../components/ui/Slider/Slider";
import DailyBest from "../DailyBest/DailyBest";
import DailyDeals from "../DailyDeals/DailyDeals";
import NewsLetterSection from "../NewsLetterSection/NewsLetterSection";
import PopularProduct from "../PopularProduct/PopularProduct";
import TopProducts from "../TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <CategoryTabSlider />
      <Banner />
      <PopularProduct />
      <DailyBest />
      <DailyDeals />
      <TopProducts />
      <NewsLetterSection />
      <div className="container-fluid">
        <ServiceSection />
      </div>
    </div>
  );
};

export default Home;
