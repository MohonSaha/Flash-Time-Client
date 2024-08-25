import MyBreadcrumbs from "../../components/shared/Breadcrumbs/Breadcrumbs";
import "./Cart.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Button, Checkbox } from "@mui/material";
import ProductCartBox from "../../components/ui/ProductCartBox/ProductCartBox";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchBar from "../../components/shared/SearchBar/SearchBar";

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
          <div className="grid grid-cols-12 gap-8">
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

            <div className="col-span-4">
              <div className="cartSummaryWrapper">
                <div>
                  <p className="text-slate-400 mb-2">Location</p>
                  <div className="mb-4 shipping">
                    <LocationOnOutlinedIcon />
                    <span className="text-sm">Add Shipping Address</span>
                  </div>
                  <hr />

                  <div className="cartSummary mt-3">
                    <h4>Order Summary</h4>

                    <div className="flex items-center justify-between mt-3">
                      <h5>Subtotal (3 items)</h5>
                      <p>$ 16,647</p>
                    </div>
                    <div className="flex items-center justify-between mt-2 mb-8">
                      <h5>Shipping Fee</h5>
                      <p>$ 647</p>
                    </div>

                    <div className="w-[97%] mx-auto">
                      <SearchBar placeholder={"Enter Voucher Code"} />
                    </div>
                    <div className="flex items-center justify-between mt-4 mb-8">
                      <h5>Total</h5>
                      <p>$ 16,647</p>
                    </div>

                    <Button className="bg-flash" fullWidth>
                      Proceed To Checkout (4)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
