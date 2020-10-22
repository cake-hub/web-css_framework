import React from "react";
import {Teaser, TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const TeaserDefault = () => (
    <div className="cake-example-container" id="showBox">
        <TeaserNotLinked />
    </div>
);

const TeaserLinked = () => (
    <div className="cake-example-container" id="showBox">
        <Teaser />
    </div>
);

const TeaserTitle = () => (
    <div className="cake-example-container" id="showBox">
        <Teaser
            c_title="Title"
        ></Teaser>
    </div>
);

const TeaserTitleSubheadline = () => (
    <div className="cake-example-container" id="showBox">
        <Teaser
            c_title="Title"
            c_subhead="Subhead"
        ></Teaser>
    </div>
);

const TeaserLight = () => (
    <div className="cake-example-container" id="showBox">
        <Teaser
            className="teaser-card-light"
            c_title="Title"
            c_subhead="Subhead"
        ></Teaser>
    </div>
);

const TeaserGrid3 = () => (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-4 p-1">
                <Teaser />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 p-1">
                <Teaser />
            </div>
        </div>
    </div>
);

const TeaserGrid4 = () => (
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser />
            </div>
            <div className="col col-12 col-sm-6 col-md-3 p-1">
                <Teaser
                    c_title="Title"
                    c_subhead="Subhead"
                ></Teaser>
            </div>
        </div>
    </div>
);

export default {
    TeaserDefault,
    TeaserLinked,
    TeaserTitle,
    TeaserTitleSubheadline,
    TeaserLight,
    TeaserGrid3,
    TeaserGrid4,
};
