import React from "react";

const SectionHead = ( {
    children,
    className="",
    ...props } ) => (
    <header className={ "section-head " + className } {...props}>
        <h2 className="section-head-title">
            {children}
        </h2>
    </header>
);

export default SectionHead;
