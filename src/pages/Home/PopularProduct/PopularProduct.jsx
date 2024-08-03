import Product from "../../../components/shared/Product/Product";
import "./PopularProduct.css";

const PopularProduct = () => {
  const categoriesNames = [
    "Clothing and Beauty",
    "Soft Drinks",
    "Fish and Seafood",
    "Pet food & toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh fruit",
    "Bread and juice",
    "Milk and Dairies",
    "Soft Drinks",
    "Clothing and Beauty",
    "Fish and Seafood",
    "Fast food",
    "Pet food & toy",
  ];
  return (
    <div className="Popularproduct">
      <div className="container-fluid">
        <div className="flex items-center justify-between">
          <h2 className="sectionHeading mt-0 mb-0">Popular Products</h2>
          <ul className="list-list-inline flex gap-5 filterTab">
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                All
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Soft Drinks
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Fast food
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Fresh fruit
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Vegetables
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Fish
              </a>
            </li>
            <li className="list-inline-item">
              <a href="All" className="cursor-pointer">
                Vegetables
              </a>
            </li>
          </ul>
        </div>

        <div className="productRow grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1  gap-4">
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
          <div className="item">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
