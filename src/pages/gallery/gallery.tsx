import React from "react";
import Navbar from "../../containers/navbar/navbar";
import { ImageGallery } from "../../components/image-gallery/image-gallery";
import ContactUs from "../../containers/contactUs/contactUs";
import { Footer } from "../../containers/footer/footer";

function Gallery() {
  
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])

  return (
    <div className="flex flex-col">
      <Navbar props={{ atPageTop: false, fromGallery: true }} />
      <ImageGallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Gallery;
