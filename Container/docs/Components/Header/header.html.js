import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";
import HeaderUsernavigationItem from "@Develop/Components/Header/headerUsernavigationItem.html";
import HeaderListItem from "@Develop/Components/Header/headerListItem.html";

const Header = (  {
    c_subnavigation=false,
    children,
    className="",
    ...props
 }  ) => (
    <header className={"header " + className} data-controller="header" {...props}>
        <div className="header-preheader container-responsive">
            <div className="header-brand d-none d-md-block">
                Brand
            </div>
            <ul className="header-brandnav header-list" data-controller="header/brandnav" role="navigation" aria-label="Brand Navigation">
                <HeaderListItem className="header-brandnav-link">Brand-Nav title</HeaderListItem>
                <HeaderListItem className="header-brandnav-link">Brand-Nav title</HeaderListItem>
                <HeaderListItem className="header-brandnav-link">Brand-Nav title</HeaderListItem>
                <HeaderListItem className="header-brandnav-link">Brand-Nav title</HeaderListItem>
            </ul>
            <ul className="header-language header-list" data-controller="header/language" role="navigation" aria-label="Language selection">
                <HeaderListItem className="header-language-link" c_ariaLabel="fully written language">
                    <abbr
                        title="fully written language"
                    >XX</abbr>
                </HeaderListItem>
                <HeaderListItem className="header-language-link" c_ariaLabel="fully written language">
                    <abbr
                        title="fully written language"
                    >XX</abbr>
                </HeaderListItem>
                <HeaderListItem className="header-language-link" c_ariaLabel="fully written language (selected language)">
                    <abbr
                        title="fully written language"
                    >XX</abbr>
                    <span className="header-language-active-icon"></span>
                </HeaderListItem>
            </ul>
            <div className="header-wrapper">
                <a href="#" className="header-logo-wrapper">
                    <img src="images/logo.svg" alt="Lidl Logo" className="header-logo" />
                </a>
                <div className="header-claim d-none d-md-block">
                    Brand-Claim
                </div>
                <ul className="header-usernavigation header-list" role="navigation" aria-label="User Navigation">
                    <HeaderListItem className="header-usernavigation-link">
                        <HeaderUsernavigationItem>
                            Title
                        </HeaderUsernavigationItem>
                    </HeaderListItem>
                    <HeaderListItem className="header-usernavigation-link">
                        <HeaderUsernavigationItem>
                            Title
                        </HeaderUsernavigationItem>
                    </HeaderListItem>
                    <HeaderListItem className="header-usernavigation-link">
                        <HeaderUsernavigationItem>
                            Title
                        </HeaderUsernavigationItem>
                    </HeaderListItem>
                    <HeaderListItem className="header-usernavigation-link">
                        <HeaderUsernavigationItem>
                            Title
                        </HeaderUsernavigationItem>
                    </HeaderListItem>
                    <HeaderListItem className="header-usernavigation-link">
                        <HeaderUsernavigationItem c_badge="X">
                            Title
                        </HeaderUsernavigationItem>
                    </HeaderListItem>
                    <HeaderListItem className="header-usernavigation-link">
                        <HeaderUsernavigationItem c_badge="XX">
                            Title
                        </HeaderUsernavigationItem>
                    </HeaderListItem>
                </ul>
                <div className="header-navigation-burgermenu">
                    <button className="hamburger hamburger--squeeze" data-controller="header/burgermenu" aria-pressed="false">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                        <div className="header-navigation-burgermenu-text">Menue</div>
                    </button>
                </div>
            </div>

            <nav className="header-navigation" data-controller="header/navigation" aria-label="Main">
                <a href="#" className="header-navigation-back" data-controller="header/navigation/back"
                    // data-target="header/navigation/main"
                >
                    <Icon name="arrow-left" title="Back" className="icon-16 icon-vertical-middle header-navigation-back-icon" />
                    Back-Function
                </a>
                <button className="btn btn-slider btn-header-navigation-slider btn-header-navigation-slider-previous" data-toggle="header/navigation/menu/main/slider/prev">
                    <Icon name="arrow-left" title="Previous Slide" className="icon-16" />
                </button>
                <button className="btn btn-slider btn-header-navigation-slider btn-header-navigation-slider-next" data-toggle="header/navigation/menu/main/slider/next">
                    <Icon name="arrow-right" title="Next Slide" className="icon-16" />
                </button>
                <ul className="header-list header-navigation-list" data-controller="header/navigation/menu" data-identifier="header/navigation/main" data-active>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub1" : null}>
                            Main-Nav title 1
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub2" : null}>
                            Main-Nav title 2
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub3" : null}>
                            Main-Nav title 3
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub4" : null}>
                            Main-Nav title 4
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub5" : null}>
                            Main-Nav title 5
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub3" : null}>
                            Main-Nav title 3
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub4" : null}>
                            Main-Nav title 4
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub5" : null}>
                            Main-Nav title 5
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub3" : null}>
                            Main-Nav title 3
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub4" : null}>
                            Main-Nav title 4
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                    <li className="header-navigation-list-item">
                        <a href="#" className="header-navigation-link" data-controller={c_subnavigation ? "header/navigation/link" : null} data-target={c_subnavigation ? "header/navigation/main/sub5" : null}>
                            Main-Nav title 5
                            {c_subnavigation ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null}
                        </a>
                    </li>
                </ul>

                { children }
            </nav>
        </div>
    </header>
);

export default Header;
