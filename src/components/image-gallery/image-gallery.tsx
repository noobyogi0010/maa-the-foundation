import React from "react";
import { ImagePopup } from "../image-popup/image-popup";
import img3 from "../../assets/images/img3.jpg";
import img2 from "../../assets/images/img2.jpg";
import img4 from "../../assets/images/img4.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import img17 from "../../assets/images/img17.jpg";
import img18 from "../../assets/images/img18.jpg";
import img19 from "../../assets/images/img19.jpg";
import img20 from "../../assets/images/img20.jpg";
import img21 from "../../assets/images/img21.jpg";
import img22 from "../../assets/images/img22.jpg";
import img23 from "../../assets/images/img23.jpg";
import img24 from "../../assets/images/img24.jpg";
import img25 from "../../assets/images/img25.jpg";
import img26 from "../../assets/images/img26.jpg";
import img27 from "../../assets/images/img27.jpg";

export const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const images = [
      img11,img10,img9,img8,img2, img4,img3, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27,
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