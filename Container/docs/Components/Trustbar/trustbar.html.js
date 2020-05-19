import React from "react";

const Trustbar = ( { className="",
                    children,
                    ...props } ) => (
    <div className={ "trustbar " + className } {...props}>
        <div className="container-responsive">
            <ul className="trustbar-list">
                {children}
            </ul>
        </div>
    </div>
);

export default Trustbar;
