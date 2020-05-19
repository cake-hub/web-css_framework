import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const Subnavigation = (navigationStructure) => (
    <React.Fragment>
        <button className="btn btn-slider btn-header-subnavigation-slider btn-header-navigation-slider-previous" data-toggle="header/navigation/menu/sub/slider/prev">
            <Icon name="arrow-left" title="Previous Slide" className="icon-16" />
        </button>
        <button className="btn btn-slider btn-header-subnavigation-slider btn-header-navigation-slider-next" data-toggle="header/navigation/menu/sub/slider/next">
            <Icon name="arrow-right" title="Next Slide" className="icon-16" />
        </button>
        { navigationStructure.map (navigationList => (
            <ul key={ navigationList } className={"header-list header-subnavigation-list" + (!navigationList.desktopVisible ? " d-none" : "")} data-controller="header/navigation/menu" data-identifier={ navigationList.identifier }>
                <li className="header-subnavigation-list-item header-subnavigation-list-head-item">
                    <a href={ navigationList.link } className="header-subnavigation-link active" data-controller="header/navigation/link">
                        <span className="header-subnavigation-head-link">{ navigationList.title }</span>
                        <span className="badge badge-primary badge-small ml-1 header-subnavigation-badge">Direct access</span>
                    </a>
                </li>
                {
                    navigationList.menuLinks.map (navigationLink => (
                        <li key={ navigationLink } className="header-subnavigation-list-item">
                            <a href={navigationLink.link} className="header-subnavigation-link" data-controller="header/navigation/link" data-target={ navigationLink.target ? navigationLink.target : null}>
                                { navigationLink.title }
                                { navigationLink.target ? <Icon name="arrow-right" title="Go to" className="header-navigation-link-icon" /> : null }
                            </a>
                        </li>
                    ))
                }
            </ul>
        )) }
    </React.Fragment>
);

export default Subnavigation;
