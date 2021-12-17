import React from "react";
import './sectionHeading.css';

type HeadingProps = {
    title: string;
}

export default function SectionHeading(props: HeadingProps) {
    return (
        <h3 className="text-2xl pb-8 pl-14 pr-14 lg:pr-7 font-bold relative heading-dash">{props.title}</h3>
    );
}