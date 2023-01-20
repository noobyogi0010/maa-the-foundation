import React from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import './ourTeam.css';
import team1 from '../../assets/images/team1.jpg';

export default function OurTeam() {
    const sectionTitle = 'Our Team';
    return (
        <div id="team" className="flex flex-col bg-yellow-100 py-8">
            <SectionHeading title={sectionTitle} />
            <div className="flex flex-1 flex-col px-14 lg:flex-row">
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
        </div>
    )
}