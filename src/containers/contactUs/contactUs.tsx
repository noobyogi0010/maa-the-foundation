import React from "react";
import './contactUs.css';

export default function ContactUs() {
    return (
        <div id="contact" className="flex px-14 py-8 background">
            <h4 className="text-4xl text-white md:w-2/3">Looking for some help?</h4>
            <div className="flex justify-center md:justify-end md:w-1/3 items-center">
                <button className="bg-yellow-300 hover:bg-yellow-500 text-black uppercase text-md font-bold py-2 px-4 rounded">Contact Us</button>
            </div>
        </div>
    )
}