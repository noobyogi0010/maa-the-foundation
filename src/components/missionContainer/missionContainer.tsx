import React from "react";
import './missionContainer.css';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';

export default function MissionContainer() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-1 flex-col md:flex-row mt-8 mx-14">
                <div className="flex flex-col lg:mr-8 bg-white rounded shadow-md mt-4 lg:mt-0">
                    <img src={img3} alt="" className="rounded-tl rounded-tr shadow-md" />
                    <span className="flex-1 p-4 self-center font-semibold text-lg">Flag hosting ceremony</span>
                </div>
                <div className="flex flex-col lg:mr-8 bg-white rounded shadow-md mt-4 lg:mt-0">
                    <img src={img4} alt="" className="rounded-tl rounded-tr shadow-md" />
                    <span className="flex-1 p-4 self-center font-semibold text-lg">Ball catching game</span>
                </div>
                <div className="flex flex-col lg:mr-8 bg-white rounded shadow-md mt-4 lg:mt-0">
                    <img src={img2} alt="" className="rounded-tl rounded-tr shadow-md" />
                    <span className="flex-1 p-4 self-center font-semibold text-lg">Winter wear distribution</span>
                </div>
            </div>
        </div>
    );
}