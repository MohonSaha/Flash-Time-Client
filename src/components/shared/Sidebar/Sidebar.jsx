import ListBox from "../../ListBox/ListBox";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="">
      <div className="sidebarCard">
        <h3>Category</h3>

        <div className="mt-8 space-y-3">
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
          <ListBox />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
