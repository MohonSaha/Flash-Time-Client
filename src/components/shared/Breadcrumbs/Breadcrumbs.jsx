/* eslint-disable react/prop-types */
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

// eslint-disable-next-line react/prop-types
const MyBreadcrumbs = ({ breadcrumbsMenu }) => {
  console.log(breadcrumbsMenu);

  // eslint-disable-next-line react/prop-types
  const lastItem = breadcrumbsMenu[breadcrumbsMenu.length - 1];
  //   console.log(lastItem);
  return (
    <div>
      <div className="breadcrumbs flex space-x-3">
        {breadcrumbsMenu
          // eslint-disable-next-line react/prop-types
          .slice(0, breadcrumbsMenu.length - 1)
          .map((item, index) => {
            return (
              <div key={index} className="item flex items-center">
                <Link to={item.link}>
                  <div className=" flex items-center">
                    <span className="icon">{item?.icon && item?.icon}</span>
                    <p>{item.menu}</p>
                    <NavigateNextIcon fontSize="small" />
                  </div>
                </Link>
              </div>
            );
          })}

        <div className="item flex items-center currentMenu">
          <p>{lastItem?.menu}</p>
        </div>
      </div>
    </div>
  );
};

export default MyBreadcrumbs;
