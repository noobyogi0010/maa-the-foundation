import React from "react";
import { ImagePopup } from "../image-popup/image-popup";
import img3 from "../../assets/images/img3.jpg";
import img2 from "../../assets/images/img2.jpg";
import img4 from "../../assets/images/img4.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import img22 from "../../assets/images/img22.jpg";
import img23 from "../../assets/images/img23.jpg";
import img24 from "../../assets/images/img24.jpg";
import img26 from "../../assets/images/img26.jpg";
import img27 from "../../assets/images/img27.jpg";
import img29 from "../../assets/images/img29.jpg";
import img30 from "../../assets/images/img30.jpg";
import img31 from "../../assets/images/img31.jpg";
import img32 from "../../assets/images/img32.jpg";
import img33 from "../../assets/images/img33.jpg";
import img34 from "../../assets/images/img34.jpg";
import img35 from "../../assets/images/img35.jpg";
import img36 from "../../assets/images/img36.jpg";
import img37 from "../../assets/images/img37.jpg";
import img38 from "../../assets/images/img38.jpg";
import img40 from "../../assets/images/img40.jpg";
import img41 from "../../assets/images/img41.jpg";
import img42 from "../../assets/images/img42.jpg";
import img43 from "../../assets/images/img43.jpg";
import img44 from "../../assets/images/img44.jpg";
import img45 from "../../assets/images/img45.jpg";
import img46 from "../../assets/images/img46.jpg";
import img47 from "../../assets/images/img47.jpg";
import img48 from "../../assets/images/img48.jpg";
import img49 from "../../assets/images/img49.jpg";

export const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const images = [
      img11,img10,img9,img8,img2, img4,img3, img22, img23, img24, img26, img27, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49,
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