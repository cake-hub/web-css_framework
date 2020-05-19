import React from "react";
import Header from "@Develop/Components/Header/header.html";
import Subnavigation from "@Develop/Components/Header/subnavigation.html";

const HeaderDefault = () => (
    <Header />
);

const HeaderSubnavigation = () => {
    const menuStructure = [];
    //First Sub-Navigation level
    for (let i = 1; i <= 5; i++) {
        const subMenuLinks = [];
        for (let n = 1; n <= 12; n++) {
            subMenuLinks.push ({
                title: "Sub-Nav title " + i + "." + n,
                link: "#",
                target: null,
            });
        }
        menuStructure.push ({
            identifier: "header/navigation/main/sub" + i,
            title: "Main-Nav title " + i,
            link: "#",
            desktopVisible: i === 1,
            menuLinks: subMenuLinks,
        });
    }

    return (
        <Header c_subnavigation>
            { Subnavigation (menuStructure) }
        </Header>
    );
};

const HeaderSubnavigationLarge = () => {
    const maxDepth = 5;
    const percentHasSubmenu = .6;
    const minSubmenus = 4;
    const maxSubmenus = 8;

    const randomInteger = () => {
        return Math.floor(Math.random() * maxSubmenus) + minSubmenus;
    };

    const createNavigationPath = (titlePrefix = "Main-Nav title ", identifier = "", desktopVisible = false, numberOfSubmenus = randomInteger (), depth = 1) => {
        const menuStructure = [];
        const subMenuLinks = [];
        for (let n = 1; n <= numberOfSubmenus; n++) {
            const hasSubNavigation = depth + 1 < maxDepth && Math.random() <= percentHasSubmenu;
            subMenuLinks.push ({
                title: "Sub-Nav title " + identifier + "." + n,
                link: "#",
                target: hasSubNavigation ? "header/navigation/main/sub" + identifier + "." + n : null,
            });
            if (hasSubNavigation) {
                menuStructure.push (...createNavigationPath ("Sub-Nav title ", identifier + "." + n, false, randomInteger (), depth + 1));
            }
        }
        return [{
            identifier: "header/navigation/main/sub" + identifier,
            title: titlePrefix + identifier,
            link: "#",
            desktopVisible: desktopVisible,
            menuLinks: subMenuLinks,
        }, ...menuStructure];
    };

    const menuStructure = [];
    for (let i = 1; i <= 5; i++) {
        menuStructure.push (...createNavigationPath ("Main-Nav title ", i, i === 1));
    }

    return (
        <Header c_subnavigation>
            { Subnavigation (menuStructure) }
        </Header>
    );
};

export default {
    HeaderDefault,
    HeaderSubnavigation,
    HeaderSubnavigationLarge,
};
