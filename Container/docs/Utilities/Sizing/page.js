import React from "react";
import PlaceholderImage from "@Cake/build/PlaceholderImage";

const SizingWidth = () => (
    <React.Fragment>
        <div className="w-25 p-2" style={{backgroundColor: "#eee"}}>Width 25%</div>
        <div className="w-50 p-2" style={{backgroundColor: "#eee"}}>Width 50%</div>
        <div className="w-75 p-2" style={{backgroundColor: "#eee"}}>Width 75%</div>
        <div className="w-100 p-2" style={{backgroundColor: "#eee"}}>Width 100%</div>
        <div className="w-auto p-2" style={{backgroundColor: "#eee"}}>Width auto</div>
    </React.Fragment>
);

const SizingHeight = () => (
    <div style={{height: "100px", backgroundColor: "rgba(255,0,0,0.1)"}}>
        <div className="h-25 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 25%</div>
        <div className="h-50 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 50%</div>
        <div className="h-75 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 75%</div>
        <div className="h-100 d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 100%</div>
        <div className="h-auto d-inline-block" style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height auto</div>
    </div>
);

const SizingMaxWidth = () => (
    <PlaceholderImage className="mw-100" height="100px" text="Max-width = 100%" />
);

const SizingMaxHeight = () => (
    <div style={{height: "100px", backgroundColor: "rgba(255,0,0,0.1)"}}>
        <div className="mh-100" style={{width: "100px", height: "200px", backgroundColor: "rgba(0,0,255,0.1)"}}>Max-height 100%</div>
    </div>
);

export default {
    SizingWidth,
    SizingHeight,
    SizingMaxWidth,
    SizingMaxHeight
};
