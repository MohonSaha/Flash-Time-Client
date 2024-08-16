import { Button } from "@mui/material";
import "./NewsLetter";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <SendOutlinedIcon />
      <input type="text" placeholder="Your email address" />
      <Button className="bg-flash categoryTab">Subscribe</Button>
    </div>
  );
};

export default NewsLetter;
