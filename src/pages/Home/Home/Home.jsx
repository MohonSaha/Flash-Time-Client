import Banner from "../../../components/ui/Banner/Banner";
import CategoryTabSlider from "../../../components/ui/CategoryTabSlider/CategoryTabSlider";
import CarouselSlider from "../../../components/ui/Slider/Slider";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <CategoryTabSlider />
      <Banner />
    </div>
  );
};

export default Home;
