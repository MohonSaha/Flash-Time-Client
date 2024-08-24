import MyBreadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import "./Cart.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Checkbox } from "@mui/material";
import ProductCartBox from "../../components/ui/ProductCartBox/ProductCartBox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
          <hr className="mt-5 -mx-6" />
        </div>
      </div>

      <section className="cartSection">
        <div className="container-fluid">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div>
                <h1 className="hd pb-2">Your Cart</h1>
                <div className="flex cartHeader items-center pr-20">
                  <Checkbox {...label} />
                  <p className="cartNumber">
                    There are <span className="text-flash">0</span> products in
                    your cart
                  </p>
                  <div className="clearCart ml-auto">
                    <DeleteOutlinedIcon />
                    Clear Cart
                  </div>
                </div>
              </div>

              <div className="cartWrapper">
                <div>
                  <div className="companyWrapper"></div>
                  <div className="">
                    <ProductCartBox />
                    <ProductCartBox />
                    <ProductCartBox />
                    <ProductCartBox />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
