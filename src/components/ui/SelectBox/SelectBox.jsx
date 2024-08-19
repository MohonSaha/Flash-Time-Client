/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SelectBox.css";

const SelectBox = ({ variant }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [selectItem, setSelectItem] = useState("Default");

  const isActive = (e, index) => {
    setSelectedIndex(index);
    setSelectItem(e);
  };

  return (
    <div>
      <ul className="selectBox">
        <li
          key={0}
          onClick={() => isActive("Default", 0)}
          className={`${selectedIndex === 0 ? "active" : ""}`}
        >
          {"Default"}
          {selectedIndex === 0 && <span className="checkMark"></span>}
        </li>

        {variant?.map((item, index) => {
          return (
            <li
              key={index + 1}
              onClick={() => isActive(item.name, index + 1)}
              className={`${selectedIndex === index + 1 ? "active" : ""}`}
            >
              {item.name}
              {selectedIndex === index + 1 && (
                <span className="checkMark"></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectBox;
