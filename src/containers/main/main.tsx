import React from "react";
import HeaderImageContainer from "../../components/header-image-container/headerImageContainer";
import HeaderInfoContainer from "../../components/header-info-container/headerInfoContainer";
import './main.css';

function Main() {
    return (
        <div className="flex flex-col lg:flex-row">
            <HeaderInfoContainer />
            <HeaderImageContainer />
        </div>
    )
}

export default Main;