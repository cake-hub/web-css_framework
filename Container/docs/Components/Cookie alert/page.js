import React from "react";
import fs from "fs";
import path from "path";
import purify from "purify-css";
import filterCss from "filter-css";
import stripCssComments from "strip-css-comments";
import UglifyJS from "uglify-js";
import { minify } from "html-minifier";

import config from "../../config";
import { rawMarkup } from "@Develop/helper";
import CookieAlert from "@Develop/Components/Cookie alert/cookieAlert.html";
import CookieAlertExtended from "@Develop/Components/Cookie alert/cookieAlert-extended.html";
import Header from "@Develop/Components/Header/header.html";

const CookieAlertExample = () => (
    <CookieAlert>
        <p className="m-0">
            Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer,
            you may not be able to store your preferences, and some of our pages might not display properly. <a href="#">privacy policy</a>.
        </p>
    </CookieAlert>
);

const CookieAlertWithHeader = () => (
    <React.Fragment>
        <CookieAlertExample />
        <Header />
    </React.Fragment>
);

const CookieAlertExtendedExample = () => (
    <CookieAlertExtended/>
);

const PreviewCookieBotSource = (sourceCode) => (
    <div className="form-group">
        <textarea
            className="form-control w-100"
            style={{height: "200px"}}
            defaultValue={ sourceCode }>
        </textarea>
    </div>
);

const CookieAlertExtendedJavaScript = () => {
    const cookieAlertExtendedJavaScriptFilePath = path.join (config.rootPath, '/js/cookieAlert-extended.js');
    let javascriptFile = fs.readFileSync (cookieAlertExtendedJavaScriptFilePath, { encoding: "utf8" });
    javascriptFile = UglifyJS.minify (javascriptFile).code;
    return PreviewCookieBotSource (javascriptFile);
};

const CookieAlertExtendedHTML = () => {
    let html = rawMarkup (
        <CookieAlertExtended
            c_language="[#LANGUAGE#]"
            c_textDirection="[#TEXTDIRECTION#]"
            c_title="[#TITLE#]"
            c_text="[#TEXT#]"
            c_details="[#DETAILS#]"
            c_acceptButton="[#ACCEPT#]"
            c_acceptConfigurationButton="[#DECLINE#]"
            c_necessaryButton="[#COOKIETYPE_NECESSARY_RAW#]"
            c_preferenceButton="[#COOKIETYPE_PREFERENCE_RAW#]"
            c_statisticsButton="[#COOKIETYPE_STATISTICS_RAW#]"
            c_marketingButton="[#COOKIETYPE_ADVERTISING_RAW#]"
        />,
        null,
        ".html"
    );
    html = minify (html, {
        collapseWhitespace: true,
    });
    return PreviewCookieBotSource (html);
};

const CookieAlertExtendedCSS = () => {
    const cookieAlertExtendedCSSFilePath = path.join (config.rootPath, '/themes/Lidl/dist/css/cake-cookiebot.css');
    const cssContent = fs.readFileSync (cookieAlertExtendedCSSFilePath, { encoding: "utf8" });

    const transformCssToBeAllowedByCookieBot = (css) => {
        //Filter not supported css-selectors (Cookiebot)
        css = filterCss (css, [
            /@-moz-document/,
            /@supports/,
            /:root/,
        ]);
        // delete all selectors with '@-moz-document' at the beginning (selector content included)
        const regEx = /[\t\f ]*@-moz-document[\t\f ].*\{(?:(?:[\s]|[^{}])*(?:\{(?:[^{}]|[\s])*\})(?:[\s]|[^{}])*)*\}/gm;
        css = css.replace(regEx, "");
        css = purify (
            rawMarkup ( <CookieAlertExtended />, null, ".html" ),
            css, {
                minify: true,
            }
        );
        //Remove css comments, because they are not supported by Cookiebot
        css = stripCssComments (
            css,
            {
                preserve: false,
            }
        );
        return css.trim ();
    }

    return PreviewCookieBotSource (
        transformCssToBeAllowedByCookieBot (cssContent)
    );
};


export default {
    CookieAlertExample,
    CookieAlertWithHeader,
    CookieAlertExtendedExample,
    CookieAlertExtendedJavaScript,
    CookieAlertExtendedHTML,
    CookieAlertExtendedCSS,
};
