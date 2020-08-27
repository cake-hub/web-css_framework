import React from "react";

const Coupon = ({ className="", children, c_text, ...props }) => (
    <div className={"coupon" + (className ? " " + className : "")} {...props}>
        <div className="coupon-content">{children}</div>
        <div className="coupon-text">{c_text}**</div>
    </div>
);

export default Coupon;
