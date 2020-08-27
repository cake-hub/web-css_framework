import React from "react";

const Flap = ({ className="", children, ...props }) => (
    <div className={"flap" + (className ? " " + className : "")} {...props}>
        <div className="flap-content bg-mark">
            <div className="flap-nose"></div>
            <div className="flap-text">
                {children}
            </div>
        </div>
    </div>
);

export default Flap;
