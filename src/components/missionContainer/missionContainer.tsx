import React from "react";
import './missionContainer.css';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';

export default function MissionContainer() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex flex-col ml-14 mr-14 lg:ml-14 lg:mr-0 mt-8 px-4 pt-4 bg-white border-2 border-black rounded">
                    <img src={img3} alt="" className="rounded shadow-md" />
                    <span className="flex-1 p-2">Flag hosting ceremony</span>
                </div>
                <div className="flex flex-col ml-14 mr-14 lg:ml-7 lg:mr-0 mt-8 px-4 pt-4 bg-white border-2 border-black rounded">
                    <img src={img4} alt="" className="rounded shadow-md" />
                    <span className="flex-1 p-2">Ball catching game</span>
                </div>
                <div className="flex flex-col ml-14 mr-14 lg:ml-7 lg:mr-14 mt-8 px-4 pt-4 bg-white border-2 border-black rounded">
                    <img src={img2} alt="" className="rounded shadow-md" />
                    <span className="flex-1 p-2">Winter wear distribution</span>
                </div>
            </div>
        </div>
    );
}