import React from "react";

const Footer = ( { children,
                    ...props } ) => (
    <footer className="footer" role="contentinfo" { ...props }>
        <div className="container-responsive">
            {children}
        </div>
    </footer>
);

export default Footer;
