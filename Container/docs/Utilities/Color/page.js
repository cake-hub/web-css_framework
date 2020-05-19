import React from "react";

const ColorText = () => (
    <React.Fragment>
        <p className="text-primary">.text-primary</p>
        <p className="text-success">.text-success</p>
        <p className="text-info">.text-info</p>
        <p className="text-warning">.text-warning</p>
        <p className="text-danger">.text-danger</p>
        <p className="text-gray">.text-gray</p>
    </React.Fragment>
);

const ColorBackground = () => (
    <React.Fragment>
        <p className="bg-primary text-white">.bg-primary</p>
        <p className="bg-success text-white">.bg-success</p>
        <p className="bg-info text-white">.bg-info</p>
        <p className="bg-warning text-white">.bg-warning</p>
        <p className="bg-danger text-white">.bg-danger</p>
        <p className="bg-gray text-white">.bg-gray</p>
    </React.Fragment>
);

const ColorBackgroundGradient = () => (
    <div className="d-flex flex-wrap">
        <div className="bg-gradient-primary text-white flex-fill cake-example-bg-gradient">.bg-gradient-primary</div>
        <div className="bg-gradient-success text-white flex-fill cake-example-bg-gradient">.bg-gradient-success</div>
        <div className="bg-gradient-info text-white flex-fill cake-example-bg-gradient">.bg-gradient-info</div>
        <div className="bg-gradient-warning text-white flex-fill cake-example-bg-gradient">.bg-gradient-warning</div>
        <div className="bg-gradient-danger text-white flex-fill cake-example-bg-gradient">.bg-gradient-danger</div>
        <div className="bg-gradient-gray text-white flex-fill cake-example-bg-gradient">.bg-gradient-gray</div>
    </div>
);

const ColorMark = () => (
    <React.Fragment>
        <p className="text-mark">.text-mark</p>
        <p className="bg-mark">.bg-mark</p>
        <div className="bg-gradient-mark flex-fill cake-example-bg-gradient">.bg-gradient-mark</div>
    </React.Fragment>
);

export default {
    ColorText,
    ColorBackground,
    ColorBackgroundGradient,
    ColorMark,
};
