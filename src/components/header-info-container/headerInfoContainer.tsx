import React from "react";
import SocialLinks from "../social-links/socialLinks";
import './headerInfoContainer.css';

export default function HeaderInfoContainer() {
    return (
        <div className="flex-1 bg-yellow-100">
            <h1 className="text-8xl font-bold px-14 capitalize flex-wrap">Charity is an act of a soft heart.</h1>
            <div className="flex py-8 px-14">
                <p className="text-justify">Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres. </p>
            </div>
            <div className="flex py-8 px-14">
                <button className="bg-green-500 hover:bg-green-700 text-white uppercase font-medium py-6 px-6 rounded text-base capitalize">
                    Donate Now
                </button>
                <a className="subpixel-antialiased px-10 py-6 text-blue-700 hover:underline hover:text-blue-800" href="#learnmore">Learn more</a>
            </div>
            <SocialLinks />
        </div>
    );
}