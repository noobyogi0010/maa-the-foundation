import React, { useState } from "react";
import SocialLinks from "../social-links/socialLinks";
import './headerInfoContainer.css';
import { Popup } from "../popup/popup";
import img from "../../assets/payments/qr-code.jpeg"

export default function HeaderInfoContainer() {
    // declare consts for button labels
    const LEARN_MORE_LABEL = "learn more";
    const DONATE_NOW_LABEL = "donate now";
    // declare title and body markup for learn more popup 
    const LEARN_MORE_POPUP_MARKUP = `
    <p className="text-justify text-base lg:text-lg text-black">
    <strong>Mission and Vision:</strong><br/>
    The Movement Against Aनपढ़ता is a voluntary organization with a profound mission to improve the lives of underprivileged communities, encompassing both rural and urban areas. Founded in March 2018 by Ankit Ranga, the organization was born out of a vision to uplift underprivileged children, adults, and communities, and to create a positive impact on society. The central tenet of the organization is to provide education and basic literacy to individuals regardless of their economic conditions.<br/><br/>
    
    <strong>Founder's Inspiration:</strong><br/>
    Ankit Ranga, the visionary behind the Movement Against Aनपढ़ता, firmly believes in the intrinsic right of every individual to access education and acquire basic literacy skills. Regardless of economic disparities, he envisions a world where educational opportunities are accessible to all, helping to break the cycle of poverty and ignorance. Furthermore, Ankit's desire to give back to society, coupled with his passion to make a difference in the world, laid the foundation for this transformative organization.<br/><br/>
    
    <strong>Approach and Activities:</strong><br/>
    Since its establishment, the Movement Against Aनपढ़ता has been working relentlessly to bridge the educational gap in underprivileged communities. Despite not having legal certification or registration, the organization has been proactive in implementing a range of initiatives to achieve its objectives. Some of the key activities include:<br/><br/>
    
    Education Outreach Programs: The NGO conducts various educational outreach programs to provide basic literacy skills to children and adults who lack access to formal education. Volunteers and educators work together to design engaging and informative curricula that cater to the specific needs of the target communities.<br/><br/>
    
    Empowerment Projects: The organization runs empowerment projects that focus on skill development, vocational training, and entrepreneurship. These initiatives aim to equip individuals with the necessary tools to enhance their employability and self-sufficiency.<br/><br/>
    
    Community Development: Recognizing the importance of holistic development, the NGO engages in community-based projects that focus on improving healthcare, sanitation, and other vital infrastructure, thus enhancing the overall quality of life.<br/><br/>
    
    Gurukul for Underprivileged Students: One of the most ambitious visions of the organization is to establish an Gurukul, a residential educational institution, where students from low-economic backgrounds can reside and learn. This Gurukul will not only provide them with formal education but also offer life skills, moral values, and personal development, nurturing well-rounded individuals ready to contribute positively to society.<br/><br/>
    
    Advocacy and Awareness: The Movement Against Aनपढ़ता actively advocates for the right to education and raises awareness about the challenges faced by underprivileged communities. By engaging with the public and policymakers, the organization strives to create a more inclusive and equitable educational system.<br/><br/>
    
    <strong>Impact and Achievements:</strong><br/>
    Though relatively young, the Movement Against Aनपढ़ता has already made a significant impact on the lives of numerous individuals. By providing educational opportunities and empowering underprivileged communities, the NGO has witnessed positive changes, such as increased literacy rates, enhanced livelihoods, and strengthened community bonds. Moreover, the organization's passion for its mission has inspired many volunteers and donors to join hands and support the cause.<br/><br/>
    
    <strong>Future Outlook:</strong><br/>
    As the Movement Against Aनपढ़ता moves forward, it envisions expanding its reach and impact, extending its educational and empowerment initiatives to more underserved regions. The establishment of the Gurukul remains a key goal, and the organization actively seeks partnerships and collaborations to realize this dream. Through continuous efforts and unwavering dedication, the NGO strives to create a society where education is a universal right, enabling individuals to break free from the shackles of illiteracy and poverty.
    </p>
    `;
    const LEARN_MORE_POPUP_TITLE = `Learn more about MAA-The Foundation`;
    // declare title and body markup for learn more popup 
    const DONATE_NOW_POPUP_TITLE = `Bank Details for MAA-The Foundation`;
    const DONATE_NOW_POPUP_MARKUP = `
    <p className="text-justify text-base lg:text-lg text-black">
        Account Name: <strong>MAA The Foundation</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        Account Number: <strong>38470640920</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        Branch code: <strong>51416</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        IFSC Code: <strong>SBIN0051416</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        MICR: <strong>305002021</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        Branch Name: <strong>Panchsheel Nagar, Ajmer</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        UPI ID: <strong>38470640920@sbi</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        80G Registration Number: <strong>AAJAM0166HF20231</strong>
    </p>
    <p className="text-justify text-base lg:text-lg text-black">
        QR Code: 
    </p>
    <img src=${img} alt="QR Code" />
    `;

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
                <p className="text-justify text-base lg:text-xl">The <strong>MOVEMENT AGAISNT Aनपढ़ता Foundation</strong> is a non-profit organisation headquartered in <strong>AJMER, RAJASTHAN, INDIA</strong>. MAA the foundation aims for Upliftment of children hailing from socio-economically challenging backgrounds. </p>
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