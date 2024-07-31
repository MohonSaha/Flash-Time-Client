import Banner from "../../../components/ui/Banner/Banner";
import CategoryTabSlider from "../../../components/ui/CategoryTabSlider/CategoryTabSlider";
import CarouselSlider from "../../../components/ui/Slider/Slider";
import PopularProduct from "../PopularProduct/PopularProduct";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <CategoryTabSlider />
      <Banner />
      <PopularProduct />
    </div>
  );
};

export default Home;
