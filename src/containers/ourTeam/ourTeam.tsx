import React, { useState } from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import "./ourTeam.css";
import team1 from "../../assets/images/team1.jpg";

export default function OurTeam() {
  const sectionTitle = "Our Team";

  const [activeTab, setActiveTab] = useState(2);

  const handleClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div id="team" className="flex flex-col bg-yellow-100">
      <SectionHeading title={sectionTitle} />

      <div className="w-full px-14">
        <div className="flex font-semibold text-lg">
          <div
            onClick={() => handleClick(1)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 ${
              activeTab === 1
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Designatory Authorities
          </div>
          <div
            onClick={() => handleClick(2)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 ${
              activeTab === 2
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Founders
          </div>
          <div
            onClick={() => handleClick(3)}
            className={`inline-block p-4 border-b-2 border-gray-300 rounded-t-lg cursor-pointer mr-4 ${
              activeTab === 3
                ? "border-b-2 border-green-700 text-green-700"
                : "text-gray-400"
            }`}
          >
            Volunteers
          </div>
        </div>
        <div className="p-6">
          {activeTab === 1 && (
            <div className="flex flex-1 flex-col lg:flex-row">
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4 lg:mr-6">
                <img src={team1} alt="President" className="rounded-full" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4 lg:mr-6">
                <img src={team1} alt="President" className="rounded-full" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4 lg:mr-6">
                <img src={team1} alt="President" className="rounded-full" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="flex flex-1 flex-col lg:flex-row flex-wrap">
            <div className="flex flex-col mb-8 lg:mb-8 lg:w-1/4">
              <img src={team1} alt="President" className="rounded-full w-10/12" />
              <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
              <p className="text-center italic">Founders</p>
            </div>
            <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
              <img src={team1} alt="President" className="rounded-full w-10/12" />
              <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
              <p className="text-center italic">President</p>
            </div>
            <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
              <img src={team1} alt="President" className="rounded-full w-10/12" />
              <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
              <p className="text-center italic">President</p>
            </div>
            <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
              <img src={team1} alt="President" className="rounded-full w-10/12" />
              <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
              <p className="text-center italic">President</p>
            </div>
            <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
              <img src={team1} alt="President" className="rounded-full w-10/12" />
              <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
              <p className="text-center italic">President</p>
            </div>
            <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
              <img src={team1} alt="President" className="rounded-full w-10/12" />
              <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
              <p className="text-center italic">President</p>
            </div>
          </div>
          )}
          {activeTab === 3 && (
            <div className="flex flex-1 flex-col lg:flex-row flex-wrap">
              <div className="flex flex-col mb-8 lg:mb-8 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full w-10/12" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">Volunteer</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full w-10/12" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full w-10/12" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full w-10/12" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full w-10/12" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
              <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
                <img src={team1} alt="President" className="rounded-full w-10/12" />
                <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
                <p className="text-center italic">President</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex flex-1 flex-col px-14 lg:flex-row">
        <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4 lg:mr-6">
          <img src={team1} alt="President" className="rounded-full" />
          <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
          <p className="text-center italic">President</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4 lg:mr-6">
          <img src={team1} alt="President" className="rounded-full" />
          <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
          <p className="text-center italic">President</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4 lg:mr-6">
          <img src={team1} alt="President" className="rounded-full" />
          <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
          <p className="text-center italic">President</p>
        </div>
        <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/4">
          <img src={team1} alt="President" className="rounded-full" />
          <h4 className="text-center py-1 font-bold">Ankit Ranga</h4>
          <p className="text-center italic">President</p>
        </div>
      </div> */}
    </div>
  );
}
