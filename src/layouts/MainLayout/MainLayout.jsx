import { Outlet } from "react-router-dom";
// import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../components/header/Header";
import Footer from "../../components/shared/footer/Footer";
import NewsLetterSection from "../../pages/Home/NewsLetterSection/NewsLetterSection";
import ServiceSection from "../../components/ui/ServiceSection/ServiceSection";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <NewsLetterSection />
      <div className="container-fluid">
        <ServiceSection />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
