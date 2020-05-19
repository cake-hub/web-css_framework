import React from "react";

const Accordion = ( { c_accordionId="",
                    children,
                    ...props } ) => (
    <div className="accordion" id={c_accordionId} { ...props }>
        {children}
    </div>
);

export default Accordion;
