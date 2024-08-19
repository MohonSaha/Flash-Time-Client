import "./Counter.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState } from "react";

const Counter = () => {
  const [inputValue, setinputValue] = useState(1);
  const plus = () => {
    setinputValue(inputValue + 1);
  };
  const minus = () => {
    if (inputValue !== 1) {
      setinputValue(inputValue - 1);
    }
  };
  const inputFieldValue = (e) => {
    if (Number(e.target.value) !== 0) {
      setinputValue(Number(e.target.value));
    }
  };
  return (
    <div>
      <div className="flex items-center">
        <div className="counterSection">
          <input type="number" value={inputValue} onChange={inputFieldValue} />
          <div>
            <span className="arrow plus" onClick={plus}>
              <KeyboardArrowUpOutlinedIcon />
            </span>
            <span className="arrow minus" onClick={minus}>
              <KeyboardArrowDownOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
