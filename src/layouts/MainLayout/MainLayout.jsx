import { Outlet } from "react-router-dom";
// import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../components/header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
