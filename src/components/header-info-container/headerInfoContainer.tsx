import React, { useState } from "react";
import SocialLinks from "../social-links/socialLinks";
import './headerInfoContainer.css';
import { Popup } from "../popup/popup";

export default function HeaderInfoContainer() {
    // declare consts for button labels
    const LEARN_MORE_LABEL = "learn more";
    const DONATE_NOW_LABEL = "donate now";
    // declare title and body markup for learn more popup 
    const LEARN_MORE_POPUP_MARKUP = `
    <p className="text-justify text-base lg:text-lg text-black">
        This is a placeholder for the works of magic that MAA-The Foundation do and is. Please stay tuned to learn more about us.
    </p>
    `;
    const LEARN_MORE_POPUP_TITLE = `Learn more about MAA-The Foundation`;
    // declare title and body markup for learn more popup 
    const DONATE_NOW_POPUP_TITLE = `Bank Details for MAA-The Foundation`;
    const DONATE_NOW_POPUP_MARKUP = ``;

    // declare component states
    const [openPopup, setOpenPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupBody, setPopupBody] = useState("");

    // generic click handler to open popup for both donate now and learn more
    const clickHandler = (event: React.MouseEvent) => {
        // get the label of button
        const btnText = (event?.target as HTMLElement)?.textContent;
        console.log(btnText);
        // use button label to differentiate between different buttons
        switch (btnText) {
            case LEARN_MORE_LABEL:
                console.log(">> Hellloooo.....")
                setPopupTitle(LEARN_MORE_POPUP_TITLE)
                setPopupBody(LEARN_MORE_POPUP_MARKUP);
                setOpenPopup(true);
                break;
            case DONATE_NOW_LABEL:
                setPopupTitle(DONATE_NOW_POPUP_TITLE)
                setPopupBody(DONATE_NOW_POPUP_MARKUP);
                setOpenPopup(true);
                break;
            default:
                break;
        }
    }
    return (
        <div className="flex-1 flex flex-col justify-between bg-yellow-100 pt-4 lg:pt-0">
            { openPopup ? (<Popup title={popupTitle} body={popupBody} setIsOpen={setOpenPopup} />) : null}
            <h1 className="text-6xl lg:text-9xl font-bold px-14 capitalize flex-wrap">Charity is an act of a soft heart.</h1>
            <div className="flex py-8 px-14">
                <p className="text-justify">Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres zera morilet posm. Lorem ipsum koren beus on teres. </p>
            </div>
            <div className="flex py-8 px-14 items-center justify-between sm:justify-center lg:justify-start">
                <button id="donate-now-header" className="bg-green-500 hover:bg-green-700 text-white font-medium rounded text-base lg:text-xl capitalize px-4 py-2 lg:p-6" onClick={clickHandler}>
                    {DONATE_NOW_LABEL}
                </button>
                <button name="lean-more" className="bg-none subpixel-antialiased items-center text-blue-700 text-base lg:text-lg hover:text-blue-800 ml-4 lg:mx-14 relative link hic-link capitalize" onClick={clickHandler}>{LEARN_MORE_LABEL}</button>
            </div>
            <SocialLinks />
        </div>
    );
}