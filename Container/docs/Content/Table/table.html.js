import React from "react";

const Table = ( {
    children,
    className="",
    ...props } ) => (
    <table className={ "table " + className } {...props}>
        {children}
    </table>
);

export default Table;
