import React from "react";
import {Teaser, TeaserNotLinked} from "@Develop/Components/Teaser/teaser.html";

const TeaserDefault = {
    template: () => (
        <TeaserNotLinked />
    ),
    name: "TeaserDefault",
    c_previewClassName: "cake-example-container",
};

const TeaserLinked = {
    template: () => (
        <Teaser />
    ),
    name: "TeaserLinked",
    c_previewClassName: "cake-example-container",
};

const TeaserTitle = {
    template: () => (
        <Teaser
            c_title="Title"
        ></Teaser>
    ),
    name: "TeaserTitle",
    c_previewClassName: "cake-example-container",
};

const TeaserTitleSubheadline = {
    template: () => (
        <Teaser
            c_title="Title"
            c_subhead="Subhead"
        ></Teaser>
    ),
    name: "TeaserTitleSubheadline",
    c_previewClassName: "cake-example-container",
};

const TeaserLight = {
    template: () => (
        <Teaser
            className="teaser-card-light"
            c_title="Title"
            c_subhead="Subhead"
        ></Teaser>
    ),
    name: "TeaserLight",
    c_previewClassName: "cake-example-container",
};

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
