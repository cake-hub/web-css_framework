import React from "react";
import ThemeSlider from "./themeSlider.html";
import ThemeSliderItem from "./themeSliderItem.html";

const ThemesliderDefault = () => (
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
);

const ThemesliderWithoutJavaScript = () => (
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
);

const ThemesliderWithFallback = () => (
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
);

export default {
    ThemesliderDefault,
    ThemesliderWithoutJavaScript,
    ThemesliderWithFallback
};
