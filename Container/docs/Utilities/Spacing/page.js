import React from "react";

const SpacingHorizontalCentering = () => (
    <div className="mx-auto" style={{width: "100px", backgroundColor: "rgba(86,61,124,.15)"}}>
        Centered element
    </div>
);

const SpacingNegativeMargin = () => (
    <div className="row mx-md-n5">
        <div className="col px-md-5">
            <div className="p-3 border bg-light">Custom column padding</div>
        </div>
        <div className="col px-md-5">
            <div className="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
);

export default {
    SpacingHorizontalCentering,
    SpacingNegativeMargin,
};
