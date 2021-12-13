import React from "react";
import './headerImageContainer.css';
import test from '../../assets/images/header.jpg';

export default function HeaderImageContainer() {
    return (
        <div className="hidden lg:flex flex-1 bg-yellow-300">
            <img className="pr-14" src={test} alt="Meet Khushi. She is a 6 year old girl who's education is completely funded by MAA - The Foundation." />
        </div>
    )
}