import { Outlet } from "react-router-dom";
// import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../components/header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
