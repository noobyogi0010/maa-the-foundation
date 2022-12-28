import React from "react";
import SocialLinks from "../social-links/socialLinks";
import './headerInfoContainer.css';

export default function HeaderInfoContainer() {
    return (
        <div className="flex-1 flex flex-col justify-between bg-yellow-100 pt-4 lg:pt-0">
            <h1 className="text-6xl lg:text-9xl font-bold px-14 capitalize flex-wrap">Charity is an act of a soft heart.</h1>
            <div className="flex py-8 px-14">
                <p className="text-justify">Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres. </p>
            </div>
            <div className="flex py-8 px-14 items-center justify-between sm:justify-center lg:justify-start">
                <button className="bg-green-500 hover:bg-green-700 text-white font-medium rounded text-base lg:text-xl capitalize px-4 py-2 lg:p-6">
                    Donate Now
                </button>
                <a className="subpixel-antialiased items-center text-blue-700 text-base lg:text-lg hover:text-blue-800 ml-4 lg:mx-14 relative link hic-link" href="#learnmore">Learn more</a>
            </div>
            <SocialLinks />
        </div>
    );
}