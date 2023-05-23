import React from 'react';
import MissionContainer from '../../components/missionContainer/missionContainer';
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import './ourMission.css';

export default function OurMission() {
    const sectionTitle = 'Our Mission';
    return (
        <div className="flex flex-col bg-yellow-100">
            <SectionHeading title={sectionTitle} />
            <div className="px-14">
                <p className="text-justify text-lg">The mission of <strong>MAA The Foundation</strong> is to empower and uplift <strong>underprivileged children</strong> living in slum communities. Our aim is to break the cycle of poverty by creating a nurturing and inclusive environment that fosters their overall development. Our NGO is driven by a vision of a world where every child, regardless of their socio-economic background, has the opportunity to reach their full potential. Through our mission, we aspire to break down the barriers of poverty and provide these children with a foundation for a brighter and more promising future.</p>
            </div>
            <MissionContainer />
            <hr className="h-px my-12 mx-14 bg-gray-900 border-0 opacity-30 rounded-lg"></hr>
        </div>
    )
}