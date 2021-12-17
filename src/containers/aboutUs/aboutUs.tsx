import React from "react";
import SectionHeading from "../../components/sectionHeading/sectionHeading";
import './aboutUs.css';
import img5 from '../../assets/images/img5.jpg';

export default function AboutUs() {
    const sectionTitle = 'About Us';
    return (
        <div className="flex flex-col bg-yellow-100 py-8">
            <SectionHeading title={sectionTitle} />
            <div className="flex flex-1 px-14">
                {/* <div className="flex md:w-3/4"> */}
                <div className="flex">
                    <p className="text-justify">
                        Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. Lorem ispem porem neur holet morsus joren. 
                    </p>
                </div>
                {/* <div className="hidden md:flex md:w-1/4 md:justify-end">
                    <img src={img5} alt="Khushi" className="rounded h-80" />
                </div> */}
            </div>
        </div>
    );
}