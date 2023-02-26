import React from 'react';
import MissionContainer from '../../components/missionContainer/missionContainer';
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import './ourMission.css';

export default function OurMission() {
    const sectionTitle = 'Our Mission';
    return (
        <div className="flex flex-col bg-yellow-100">
            <SectionHeading title={sectionTitle} />
            {/* <h3 className="text-2xl pb-8 pl-14 pr-14 lg:pr-7 font-bold relative heading-dash">Our Mission</h3> */}
            <div className="px-14">
                <p className="text-justify">Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. Lorem ispem karen torteum morteum zorus. </p>
            </div>
            <MissionContainer />
            <hr className="h-px my-12 mx-14 bg-gray-900 border-0 opacity-30 rounded-lg"></hr>
        </div>
    )
}