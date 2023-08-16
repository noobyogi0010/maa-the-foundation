import React, {useEffect} from "react";
import "./popup.css";

// define the type of props for popup component
type propsType = {
    title: string;
    body: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup = (props: propsType) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return ()=> {document.body.style.overflow = 'unset';}
     }, [])
    // return the dangerously setting inner html object
    const createMarkup = () => {return {__html: props.body}};

    // click handler to close the popup
    const clickHandler = () => {
        props.setIsOpen(false);
    } 
    
    return (
        <div className="!bg-gray-900/50 fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center backdrop-brightness-3">
            <div className="popup relative w-2/3 lg:w-2/4 px-6 py-4 bg-yellow-100 rounded-md h-1/2">
                <div className="popup-header font-bold text-2xl">
                    <h2>{props.title}</h2>
                </div>
                <div className="popup-body mt-4 text-base text-justify h-4/6 md:h-5/6 overflow-y-scroll p-2" dangerouslySetInnerHTML={createMarkup()} />
                <div className="popup-footer mt-4 flex justify-end">
                    <button onClick={clickHandler} className="bg-green-500 hover:bg-green-700 text-white font-medium rounded text-base capitalize px-4 py-2">Close</button>
                </div>
            </div>
        </div>
    );
}