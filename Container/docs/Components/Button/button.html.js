import React from "react";

const Button = (  {
    children,
    className="",
    noBtnClass=false,
    ...props
}  ) => (
    <button type="button" className={(noBtnClass ? "" : "btn ") + className} {...props}>
        {children}
    </button>
);

export default Button;
