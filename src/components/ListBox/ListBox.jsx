import "./ListBox.css";
import image from "../../assets/images/list.png";

const ListBox = () => {
  return (
    <div>
      <div className="listBox">
        <div className="flex">
          <img src={image} alt="" />
          <h4>Milks & Dairies</h4>
        </div>
        <div className="totalItem">
          <p>29</p>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
