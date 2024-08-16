import "./NewsLetterSection.css";
import banner from "../../../assets/images/banner-news.png";
import NewsLetter from "../../../components/ui/newsletter/NewsLetter";

const NewsLetterSection = () => {
  return (
    <div className="newsLetterSection">
      <div className="container-fluid">
        <div className="box flex items-center">
          <div className="info space-y-3">
            <h2>
              Stay home & get your daily <br /> needs from our shop
            </h2>
            <p>Start Your Daily Shopping with Nest Mart</p>
            <NewsLetter />
          </div>

          <div className="img">
            <img src={banner} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
