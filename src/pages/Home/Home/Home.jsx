import Banner from "../../../components/ui/Banner/Banner";
import CategoryTabSlider from "../../../components/ui/CategoryTabSlider/CategoryTabSlider";
import CarouselSlider from "../../../components/ui/Slider/Slider";
import DailyBest from "../DailyBest/DailyBest";
import PopularProduct from "../PopularProduct/PopularProduct";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <CategoryTabSlider />
      <Banner />
      <PopularProduct />
      <DailyBest />
    </div>
  );
};

export default Home;
