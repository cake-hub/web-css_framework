import React from "react";
import Banner from "@Develop/Components/Banner/banner.html";

const BannerWithoutHeader = () => (
    <Banner />
);

const BannerDefault = () => (
    <Banner
        c_title="Title"
    />
);

const BannerLight = () => (
    <Banner
        c_title="Title"
        c_subhead="Subhead"
        className="banner-card-light"
    />
);

const BannerWithSubhead = () => (
    <Banner
        c_title="Title"
        c_subhead="Subhead"
    />
);

export default {
    BannerWithoutHeader,
    BannerDefault,
    BannerWithSubhead,
    BannerLight,
};
