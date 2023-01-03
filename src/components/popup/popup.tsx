import React from "react";

// define the type of props for popup component
type propsType = {
    title: string;
    body: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup = (props: propsType) => {
    // return the dangerously setting inner html object
    const createMarkup = () => {return {__html: props.body}};

    // click handler to close the popup
    const clickHandler = () => {
        props.setIsOpen(false);
    } 
    
    return (
        <div className="popup">
            <div className="popup-header">
                <h2>{props.title}</h2>
            </div>
            <div className="popup-body" dangerouslySetInnerHTML={createMarkup()} />
            <div className="popup-footer">
                <button onClick={clickHandler}>Close</button>
            </div>
        </div>
    );
}