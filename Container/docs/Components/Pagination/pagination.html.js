import React from "react";

const Pagination = ( { className="",
                    children,
                    c_ariaLabel="Page navigation example",
                    ...props } ) => (
    <nav aria-label={c_ariaLabel}>
        <ul className={ "pagination " + className } {...props}>
            {children}
        </ul>
    </nav>
);

export default Pagination;
