import React from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import "./aboutUs.css";
import img7 from "../../assets/images/img7.jpg";

export default function AboutUs() {
  const sectionTitle = "About Us";
  return (
    <div id="about" className="flex flex-col bg-yellow-100">
      <SectionHeading title={sectionTitle} />
      <div className="flex px-14">
        <div className="flex md:w-3/4">
          <p className="text-justify">
            Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur
            holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem
            ispem porem neur holet morsus joren. Lorem ispem porem neur holet
            morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem
            porem neur holet morsus joren. Lorem ispem porem neur holet morsus
            joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem
            neur holet morsus joren.
          </p>
        </div>
        <div className="hidden md:flex md:w-1/4 justify-end">
          <img src={img7} alt="Khushi" className="rounded-t-full h-80" />
        </div>
      </div>
      <hr className="h-px my-12 mx-14 bg-gray-900 border-0 opacity-30 rounded-lg"></hr>
    </div>
  );
}
