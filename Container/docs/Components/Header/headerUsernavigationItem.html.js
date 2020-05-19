import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";
import Badge from "@Develop/Components/Badge/badge.html";

const HeaderUsernavigationItem = (  { children,
                    c_iconTitle="Placeholder",
                    c_iconName="placeholder",
                    c_badge="" }  ) => (
    <React.Fragment>
        <div className="header-usernavigation-icon">
            <Icon name={c_iconName} title={c_iconTitle} />
            { c_badge ?
                <Badge className="badge-addon badge-primary header-usernavigation-badge" c_ScreenReaderText="new item(s)">{ c_badge }</Badge>
            : null }
        </div>
        <span className="header-usernavigation-title d-none d-md-block">{ children }</span>
    </React.Fragment>

);

export default HeaderUsernavigationItem;
