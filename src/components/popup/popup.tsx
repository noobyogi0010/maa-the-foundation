import React from "react";

type propsType = {
    title: string;
    body: string;
}

export const Popup = (props: propsType) => {
    return (
        <div className="popup">
            <div className="popup-header">
                <h2>{props.title}</h2>
            </div>
            <div className="popup-body">
                <p>{props.body}</p>
            </div>
            <div className="popup-footer">
                <button>Close</button>
            </div>
        </div>
    );
}