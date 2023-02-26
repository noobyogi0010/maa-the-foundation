import React from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import "./events.css";
import img3 from "../../assets/images/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Events() {
  const sectionTitle = "Events & Updates";
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="about" className="flex flex-col bg-yellow-100 pt-8">
      <SectionHeading title={sectionTitle} />
      <Slider {...settings} className="mx-14">
        <div className="m-4 w-auto-imp bg-green-700 rounded">
          <img src={img3} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Hello World Event
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            We are going to show events and news here.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded">
          <img src={img3} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Hello World Event
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            We are going to show events and news here.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-green-700 rounded">
          <img src={img3} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Hello World Event
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            We are going to show events and news here.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-yellow-300 rounded">
          <img src={img3} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-900 pt-4 pb-2 mx-4">
            Hello World Event
            <hr className="h-px mr-4 bg-gray-900 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-900 mx-4 pb-4 opacity-90">
            We are going to show events and news here.
          </p>
        </div>
        <div className="m-4 w-auto-imp bg-green-700 rounded">
          <img src={img3} alt="slide1" className="rounded" />
          <h2 className="text-lg font-semibold text-gray-100 pt-4 pb-2 mx-4">
            Hello World Event
            <hr className="h-px mr-4 bg-gray-100 border-0 rounded-lg"></hr>
          </h2>
          <p className="text-base text-gray-100 mx-4 pb-4 opacity-90">
            We are going to show events and news here.
          </p>
        </div>
      </Slider>
      <hr className="h-px my-12 mx-14 bg-gray-900 border-0 opacity-30 rounded-lg"></hr>
    </div>
  );
}
