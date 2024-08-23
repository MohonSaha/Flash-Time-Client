import MyBreadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import "./Cart.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Button } from "@mui/material";

const Cart = () => {
  const breadcrumbsMenu = [
    {
      icon: <HomeOutlinedIcon />,
      menu: "Home",
      link: "/",
    },
    {
      menu: "Shop",
      link: "/listing",
    },
    {
      menu: "Cart",
      link: "/",
    },
  ];

  return (
    <div className="cartPage">
      <div className="container-fluid">
        <div className="my-5">
          <MyBreadcrumbs breadcrumbsMenu={breadcrumbsMenu}></MyBreadcrumbs>
          <hr className="" />
        </div>
      </div>

      <section className="cartSection">
        <div className="container-fluid">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <div>
                <h1 className="hd">Your Cart</h1>
                <div className="flex">
                  <p className="cartNumber">
                    There are <span className="text-flash">0</span> products in
                    your cart
                  </p>
                  <div className="clearCart ml-auto">
                    <Button className="btn-outline-gray">
                      <DeleteOutlinedIcon />
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
