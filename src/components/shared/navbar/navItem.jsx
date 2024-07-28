import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const accountMenuLists = [
  { menu: "My Account", icon: <PermIdentityOutlinedIcon /> },
  {
    menu: "Order Tracking",
    icon: <LocationOnOutlinedIcon />,
  },
  {
    menu: "My Voucher",
    icon: <LocalOfferOutlinedIcon />,
  },
  {
    menu: "My Wishlist",
    icon: <FavoriteBorderIcon />,
  },
  { menu: "Setting", icon: <SettingsOutlinedIcon /> },
  { menu: "Sign Out", icon: <LogoutOutlinedIcon /> },
];

export const megaMenuFruitLists = [
  {
    menu: "Fresh Vegetables",
  },
  {
    menu: "Frozen Vegetables",
  },
  {
    menu: "Seasonal Fruit",
  },
  {
    menu: "Herbs & Seasonings",
  },
  {
    menu: "Packaged Products",
  },
  {
    menu: "Premium Fruits",
  },
];
