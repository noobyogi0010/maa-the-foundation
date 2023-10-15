import React, { useState } from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import "./ourTeam.css";
import founder from "../../assets/images/team1.jpg";
import coFounder from "../../assets/images/team2.jpg";
import avataar from "../../assets/images/avatar.svg";
import team1 from "../../assets/team/team1.png";
import team2 from "../../assets/team/team2.png";
import team3 from "../../assets/team/team3.png";
import team4 from "../../assets/team/team4.png";
import team5 from "../../assets/team/team5.png";
import team6 from "../../assets/team/team6.png";
import team7 from "../../assets/team/team7.png";
import team8 from "../../assets/team/team8.png";
import team9 from "../../assets/team/team9.png";
import team10 from "../../assets/team/team10.png";
import team11 from "../../assets/team/team11.png";
import team12 from "../../assets/team/team12.png";
import team13 from "../../assets/team/team13.png";
import team14 from "../../assets/team/team14.png";
import team15 from "../../assets/team/team15.png";

export default function OurTeam() {
  const sectionTitle = "Our Team";

  const [activeTab, setActiveTab] = useState(2);

  const handleClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div id="team" className="flex flex-col bg-yellow-100">
      <SectionHeading title={sectionTitle} />

      <div className="w-full">
        <div className="flex font-semibold text-lg px-4 md:px-14 overflow-x-scroll md:overflow-x-hidden">
          <div
            onClick={() => handleClick(1)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 text-sm sm:text-base ${
              activeTab === 1
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Designatory Authorities
          </div>
          <div
            onClick={() => handleClick(2)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 text-sm md:text-base ${
              activeTab === 2
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Founders
          </div>
          <div
            onClick={() => handleClick(3)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 text-sm md:text-base ${
              activeTab === 3
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Registered Members
          </div>
          <div
            onClick={() => handleClick(4)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 text-sm md:text-base ${
              activeTab === 4
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Volunteers
          </div>
        </div>
        <div className="p-6 px-14">
          {activeTab === 1 && (
            <div className="flex flex-1 flex-col lg:flex-row">
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center lg:mr-6">
                <img src={founder} alt="President" className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center lg:mr-6">
                <img src={team6} alt="President" className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal" />
                <h4 className="text-center py-1 font-bold">Paramveer Singh Rathore</h4>
                <p className="text-center italic">Secretary</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center lg:mr-6">
                <img src={team3} alt="President" className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal" />
                <h4 className="text-center py-1 font-bold">Hemlata Sharma</h4>
                <p className="text-center italic">Treasurer</p>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="flex flex-1 flex-col lg:flex-row flex-wrap">
              <div className="flex flex-col mb-8 lg:mb-8 lg:w-1/4 items-center">
                <img
                  src={founder}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team6}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Paramveer Singh Rathore</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team3}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Hemlata Sharma</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={avataar}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Rajendra Singh</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team1}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Siddharth Sharma</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team11}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Ravi Sharma</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={avataar}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Deepak Singh Rathore</h4>
                {/* <p className="text-center italic">Registered Member</p> */}
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="flex flex-1 flex-col lg:flex-row flex-wrap">
              <div className="flex flex-col mb-8 lg:mb-8 lg:w-1/4 items-center">
                <img
                  src={founder}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team6}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Paramveer Singh Rathore</h4>
                {/* <p className="text-center italic">Mother of President</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team3}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Hemlata Sharma</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={avataar}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Rajendra Singh</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team1}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Siddharth Sharma</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team11}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Ravi Sharma</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={avataar}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Deepak Singh Rathore</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team4}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Sourabh Chhangani</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team15}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Yogesh Singh</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team7}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Abhishek Singh Naruka</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team2}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Shweta Khandelwal Sharma</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team5}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Koshal Singh Rathore</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team8}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Karanveer Singh Rathore</h4>
                {/* <p className="text-center italic">Founder</p> */}
              </div>
            </div>
          )}
          {activeTab === 4 && (
            <div className="flex flex-1 flex-col lg:flex-row flex-wrap">
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={coFounder}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Chandrakala Ranga</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team9}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Sunita Choudhary</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team10}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Rishi Malodiya</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team12}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Kusum Rajawat</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team13}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Bhanu Pratap Singh</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-4 lg:w-1/4 items-center">
                <img
                  src={team14}
                  alt="President"
                  className="rounded-full w-2/6 lg:w-10/12 content-around lg:content-normal"
                />
                <h4 className="text-center py-1 font-bold">Naresh Singh Rathore</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
