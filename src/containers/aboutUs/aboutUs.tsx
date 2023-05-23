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
          <p className="text-justify text-lg">
          At <strong>MAA The Foundation</strong>, we are dedicated to transforming the lives of underprivileged students from economically disadvantaged backgrounds. Our organization believes that every child deserves access to quality education, regardless of their financial circumstances. With this mission in mind, we strive to bridge the educational gap and create equal opportunities for these deserving students.<br/><br/>
          Our primary focus is on providing comprehensive support to students facing financial constraints, enabling them to pursue their dreams and unlock their true potential. We understand that education is not merely about acquiring knowledge but also about empowering individuals to break the cycle of poverty and shape a better future for themselves and their communities.<br/><br/>
          We firmly believe that <strong>education has the power to break barriers and create lasting change</strong>. By supporting underprivileged students in their educational journey, we aspire to build a society where every child has an equal opportunity to succeed and thrive. Join us in our mission to transform lives through education and make a tangible difference in the lives of these promising young individuals.
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
