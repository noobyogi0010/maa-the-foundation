import React, { useState } from "react";
import "./contactUs.css";
import { Popup } from "../../components/popup/popup";

export default function ContactUs() {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupBody, setPopupBody] = useState("");

  const DONATE_NOW_LABEL = "Contact Us";
  const DONATE_NOW_POPUP_TITLE = `MAA-The Foundation Contact Details`;
  const DONATE_NOW_POPUP_MARKUP = `
  <p className="text-justify text-base lg:text-lg text-black">
      Contact Number: <strong>+91 9024712273, +91 9460692797</strong>
  </p>
  <p className="text-justify text-base lg:text-lg text-black">
      Email Address: <strong>maathefoundation@gmail.com</strong>
  </p>
  `;

  // generic click handler to open popup for both donate now and learn more
  const clickHandler = (event: React.MouseEvent) => {
    // get the label of button
    const btnText = (event?.target as HTMLElement)?.textContent;
    console.log(btnText);
    // use button label to differentiate between different buttons
    switch (btnText) {
      case DONATE_NOW_LABEL:
        setPopupTitle(DONATE_NOW_POPUP_TITLE);
        setPopupBody(DONATE_NOW_POPUP_MARKUP);
        setOpenPopup(true);
        break;
      default:
        break;
    }
  };

  return (
    <div id="contact" className="flex px-14 py-8 background shadow-lg">
      {openPopup ? (
        <Popup title={popupTitle} body={popupBody} setIsOpen={setOpenPopup} height="fit-content" />
      ) : null}
      <h4 className="text-4xl text-white md:w-2/3">Looking for some help?</h4>
      <div className="flex justify-center md:justify-end md:w-1/3 items-center">
        <button
          className="bg-yellow-300 hover:bg-yellow-500 text-black uppercase text-md font-bold py-2 px-4 rounded"
          onClick={clickHandler}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
