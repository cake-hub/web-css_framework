import React from "react";

const OverviewContainer = () => (
    <div className="cake-example-container" id="showBox">
        <div className="container">
            <div className="cake-example-container-header"></div>
            <div className="cake-example-container-sidebar"></div>
            <div className="cake-example-container-body"></div>
        </div>
    </div>
);

const OverviewContainerFluid = () => (
    <div className="cake-example-container cake-example-container-fluid" id="showBox">
        <div className="container-fluid">
            <div className="cake-example-container-header"></div>
            <div className="cake-example-container-sidebar"></div>
            <div className="cake-example-container-body"></div>
        </div>
    </div>
);


const OverviewContainerResponsive = () => (
    <div className="cake-example-container cake-example-container-responsive" id="showBox">
        <div className="container-responsive">
            <div className="cake-example-container-header"></div>
            <div className="cake-example-container-sidebar"></div>
            <div className="cake-example-container-body"></div>
        </div>
    </div>
);

export default {
    OverviewContainer,
    OverviewContainerFluid,
    OverviewContainerResponsive,
};
