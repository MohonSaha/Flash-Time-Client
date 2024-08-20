import { useState } from "react";
import "./ImageUploader.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  console.log(images);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + images.length > 5) {
      alert("You can only upload a maximum of 5 images");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const removeImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="image-uploader">
      <div className="image-preview">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image}
              alt={`upload-${index}`}
              className="uploaded-image"
            />
            <CancelOutlinedIcon
              className="remove-icon"
              onClick={() => removeImage(index)}
            />
          </div>
        ))}

        {images.length < 5 && (
          <div className="custom-file-container">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              multiple
              className="image-input"
              id="file-upload"
              // disabled
            />
            <label htmlFor="file-upload" className="custom-file-label">
              <InsertPhotoOutlinedIcon
                style={{ fontSize: "48px", color: "#aaa" }}
              />
              <p className="text-center">{images.length}/5</p>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
