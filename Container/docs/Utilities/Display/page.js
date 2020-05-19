import React from "react";

const DisplayExamples1 = () => (
    <React.Fragment>
        <div className="d-inline p-2 bg-primary text-white">d-inline</div>
        <div className="d-inline p-2 bg-warning text-white">d-inline</div>
    </React.Fragment>
);

const DisplayExamples2 = () => (
    <React.Fragment>
        <span className="d-block p-2 bg-primary text-white">d-block</span>
        <span className="d-block p-2 bg-warning text-white">d-block</span>
    </React.Fragment>
);

const DisplayHidingElements = () => (
    <React.Fragment>
        <div className="d-md-none">hide on screens wider than md</div>
        <div className="d-none d-md-block">hide on screens smaller than md</div>
    </React.Fragment>
);

const DisplayPrint = () => (
    <React.Fragment>
        <div className="d-print-none">Screen Only (Hide on print only)</div>
        <div className="d-none d-print-block">Print Only (Hide on screen only)</div>
        <div className="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
    </React.Fragment>
);

export default {
    DisplayExamples1,
    DisplayExamples2,
    DisplayHidingElements,
    DisplayPrint,
};
