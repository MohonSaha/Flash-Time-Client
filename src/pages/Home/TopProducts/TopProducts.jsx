import ProductsTop from "../../../components/shared/ProductsTop/ProductsTop";
import "./TopProducts.css";

const TopProducts = () => {
  return (
    <div className="topProducts">
      <div className="container-fluid">
        <div className=" grid grid-cols-4 gap-8">
          <div>
            <h3>Top Selling</h3>
            <div className="mt-8">
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
            </div>
          </div>
          <div>
            <h3>Trending Products</h3>
            <div className="mt-8">
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
            </div>
          </div>
          <div>
            <h3>Recently Added</h3>
            <div className="mt-8">
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
            </div>
          </div>
          <div>
            <h3>Top Rated</h3>
            <div className="mt-8">
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
              <ProductsTop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
