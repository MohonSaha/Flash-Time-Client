import { Button, Rating } from "@mui/material";
import "./MyTabs.css";
import { productInfo, sliderImages } from "../../../Constant";
import { useState } from "react";
import vendor from "../../../assets/images/profile-2.png";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ImageUploader from "../ImageUploader/ImageUploader";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MyTabs = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [value, setValue] = useState(2);
  console.log(value);

  return (
    <div className="customTabs">
      <ul className="list-inline">
        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(0)}>
            Description
          </Button>
        </li>

        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(1)}>
            Vendor
          </Button>
        </li>
        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(2)}>
            Reviews(5)
          </Button>
        </li>
        <li className="list-inline-item">
          <Button className="" onClick={() => setActiveTabs(3)}>
            Questions and Answers
          </Button>
        </li>
      </ul>

      {activeTabs === 0 && (
        <div className="tabContent">
          <p>
            Short Hooded Coat features a straight body, large pockets with
            button flaps, ventilation air holes, and a string detail along the
            hemline. The style is completed with a drawstring hood, featuring
            Rains signature built-in cap. Made from waterproof, matte PU, this
            lightweight unisex rain jacket is an ode to nostalgia through its
            classic silhouette and utilitarian design details.
          </p>
          <ul className="two-column-list">
            {productInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>

          <br />
          <h2>Packaging and Delivary</h2>
          <p>
            Short Hooded Coat features a straight body, large pockets with
            button flaps, ventilation air holes, and a string detail along the
            hemline. The style is completed with a drawstring hood, featuring
            Rains signature built-in cap. Made from waterproof, matte PU, this
            lightweight unisex rain jacket is an ode to nostalgia through its
            classic silhouette and utilitarian design details.
          </p>
        </div>
      )}

      {activeTabs === 1 && (
        <div className="tabContent vendorInfo">
          <div className="flex items-center gap-4">
            <img src={vendor} alt="" />
            <div>
              <h4>Mohon Saha</h4>
              <div className="flex items-center space-x-2 rattingWrapper">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <span className="ratingNumber text-slate-500">
                  (10 reviews)
                </span>
              </div>
              <p>Mall / Certified Store</p>
            </div>
          </div>

          <div className="vendorReview flex mt-2">
            <div>
              <p>Positive Seller Ratings</p>
              <h1>90%</h1>
            </div>
            <div>
              <p>Ship on Time</p>
              <h1>89%</h1>
            </div>
            <div>
              <p>Chat Response Rate</p>
              <h1>68%</h1>
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <Link>
              <ForumIcon />
              Chat Now
            </Link>
            <Link>
              <StorefrontIcon />
              Go To Store
            </Link>
          </div>
        </div>
      )}

      {activeTabs === 2 && (
        <div className="tabContent reviewInfo">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5 customerReviewsBar">
              <h3>Customer reviews</h3>
              <div className="flex">
                <h1>2.79</h1>
                <div className="flex items-center space-x-2 rattingWrapper">
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                  <span className="ratingNumber text-slate-500">
                    (10 reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-7 addReview">
              <h2>Add your review</h2>
              <p>Your email address will not be published.</p>
              <p className="text-red-500">
                Please{" "}
                <span className="text-green-500">Purchage this product</span> to
                write review!
              </p>

              <div className="flex items-center mt-2">
                <p>Your rating:</p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>

              <div>
                <form action="">
                  <div className="formGroup">
                    <div>
                      <p>Review: </p>
                      <textarea
                        name=""
                        id=""
                        className="formControll"
                        disabled
                        placeholder="Write your review"
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <ImageUploader />
                    </div>

                    <div className="flex items-center mt-3 mb-6 imageWarning">
                      <InfoOutlinedIcon />
                      <small>
                        You can upload up to 6 photos, each photo maximum size
                        is 2048 kilobytes.
                      </small>
                    </div>

                    <Button className="bg-flash " disabled>
                      Submit Review
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="reviewsWrapper mt-12">
            <h2>
              10 review(s) for{" "}
              <span className="productName">
                Seeds of Change Organic Quinoe:
              </span>
            </h2>
            <div>
              <div className="review mt-6 flex gap-6">
                <img src={vendor} alt="" className="vendorImage" />
                <div>
                  <p className="reviewerName">
                    Mohon Saha <span>4 weeks ago</span>
                  </p>
                  <div className="flex items-center space-x-2 rattingWrapper">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <p>
                    As a developer I reviewed this script. This is really
                    awesome ecommerce script. I have convinced when I noticed
                    that its built on fully WordPress concept.
                  </p>

                  <div className="flex gap-4 mt-4">
                    {sliderImages.map((item, index) => {
                      return (
                        <img
                          className="productImage"
                          key={index}
                          src={item?.image}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="review mt-6 flex gap-6">
                <img src={vendor} alt="" className="vendorImage" />
                <div>
                  <p className="reviewerName">
                    Mohon Saha <span>4 weeks ago</span>
                  </p>
                  <div className="flex items-center space-x-2 rattingWrapper">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <p>
                    As a developer I reviewed this script. This is really
                    awesome ecommerce script. I have convinced when I noticed
                    that its built on fully WordPress concept.
                  </p>

                  <div className="flex gap-4 mt-4">
                    {sliderImages.map((item, index) => {
                      return (
                        <img
                          className="productImage"
                          key={index}
                          src={item?.image}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="review mt-6 flex gap-6">
                <img src={vendor} alt="" className="vendorImage" />
                <div>
                  <p className="reviewerName">
                    Mohon Saha <span>4 weeks ago</span>
                  </p>
                  <div className="flex items-center space-x-2 rattingWrapper">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <p>
                    As a developer I reviewed this script. This is really
                    awesome ecommerce script. I have convinced when I noticed
                    that its built on fully WordPress concept.
                  </p>

                  <div className="flex gap-4 mt-4">
                    {sliderImages.map((item, index) => {
                      return (
                        <img
                          className="productImage"
                          key={index}
                          src={item?.image}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="review mt-6 flex gap-6">
                <img src={vendor} alt="" className="vendorImage" />
                <div>
                  <p className="reviewerName">
                    Mohon Saha <span>4 weeks ago</span>
                  </p>
                  <div className="flex items-center space-x-2 rattingWrapper">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <p>
                    As a developer I reviewed this script. This is really
                    awesome ecommerce script. I have convinced when I noticed
                    that its built on fully WordPress concept.
                  </p>

                  <div className="flex gap-4 mt-4">
                    {sliderImages.map((item, index) => {
                      return (
                        <img
                          className="productImage"
                          key={index}
                          src={item?.image}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTabs;
