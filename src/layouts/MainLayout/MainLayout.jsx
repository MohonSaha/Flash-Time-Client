import { Outlet } from "react-router-dom";
// import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../components/header/Header";
import Footer from "../../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
