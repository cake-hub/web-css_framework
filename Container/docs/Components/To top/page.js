import React from "react";
import FooterPage from "@Develop/Components/Footer/page";
import ToTop from "@Develop/Components/To top/toTop.html";

const ToTopDefault = () => (
    <ToTop />
);

const ToTopNegative = () => (
    <ToTop />
);

const ToTopPosition = () => (
    <React.Fragment>
        <FooterPage.FooterDefault></FooterPage.FooterDefault>
        <ToTop className="btn-to-top-position" />
    </React.Fragment>
);

const ToTopScroll = () => (
    <React.Fragment>
        <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
        <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
        <ToTop data-controller="totop" className="fade invisible" />
    </React.Fragment>
);

export default {
    ToTopDefault,
    ToTopNegative,
    ToTopPosition,
    ToTopScroll,
};
