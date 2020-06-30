import React from "react";
import ThemeSlider from "./themeSlider.html";
import ThemeSliderItem from "./themeSliderItem.html";

const ThemesliderDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <ThemeSlider data-toggle="theme-slider">
            <ThemeSliderItem c_url="#" c_imgAlt="Nice cat" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" className="theme-slider-slide-active" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title with more text and new line" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
        </ThemeSlider>
    </div>
);

const ThemesliderWithoutJavaScript = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <ThemeSlider c_noJavascript>
            <ThemeSliderItem c_url="#" c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" className="theme-slider-slide-active" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title with more text and new line" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
        </ThemeSlider>
    </div>
);

const ThemesliderWithFallback = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <ThemeSlider className="theme-slider-nojs" data-toggle="theme-slider">
            <ThemeSliderItem c_url="#" c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" className="theme-slider-slide-active" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title with more text and new line" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
            <ThemeSliderItem c_imgAlt="Nice cake" c_cardSubhead="Subhead" c_cardTitle="Title" />
        </ThemeSlider>
    </div>
);

export default {
    ThemesliderDefault,
    ThemesliderWithoutJavaScript,
    ThemesliderWithFallback
};
