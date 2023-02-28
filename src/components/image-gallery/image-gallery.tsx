import React from "react";
import { ImagePopup } from "../image-popup/image-popup";
import img3 from "../../assets/images/img3.jpg";
import img2 from "../../assets/images/img2.jpg";
import img4 from "../../assets/images/img4.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";

export const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const images = [
      img11,img10,img9,img8,img2, img4,img3,
      ];
  
    const handleImageClick = (image: any) => {
      setSelectedImage(image);
    };
  
    const handleCloseClick = () => {
      setSelectedImage(null);
    };
  
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-14 bg-yellow-100">
          {images.map((image: any, index: any) => (
            <img
              key={index}
              src={image}
              alt="maa the foundation event"
              className="cursor-pointer rounded-lg shadow-md"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        {selectedImage ? (
          <ImagePopup image={selectedImage} onClose={handleCloseClick} />
        ) : null}
      </>
    );
  }