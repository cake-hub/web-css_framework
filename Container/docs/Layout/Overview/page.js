import React from "react";

const OverviewContainer = {
    template: () => (
        <div className="container">
            <div className="cake-example-container-header"></div>
            <div className="cake-example-container-sidebar"></div>
            <div className="cake-example-container-body"></div>
        </div>
    ),
    name: "OverviewContainer",
    c_previewClassName: "cake-example-container",
};

const OverviewContainerFluid = {
    template: () => (
        <div className="container-fluid">
            <div className="cake-example-container-header"></div>
            <div className="cake-example-container-sidebar"></div>
            <div className="cake-example-container-body"></div>
        </div>
    ),
    name: "OverviewContainerFluid",
    c_previewClassName: "cake-example-container cake-example-container-fluid",
};


const OverviewContainerResponsive = {
    template: () => (
        <div className="container-responsive">
            <div className="cake-example-container-header"></div>
            <div className="cake-example-container-sidebar"></div>
            <div className="cake-example-container-body"></div>
        </div>
    ),
    name: "OverviewContainerResponsive",
    c_previewClassName: "cake-example-container cake-example-container-responsive",
};

export default {
    OverviewContainer,
    OverviewContainerFluid,
    OverviewContainerResponsive,
};
