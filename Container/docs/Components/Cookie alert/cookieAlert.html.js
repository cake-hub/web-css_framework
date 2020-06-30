import React from "react";
import Button from "@Develop/Components/Button/button.html";
import shortid from "shortid";

const CookieAlert = ( { className="",
                    children,
                    c_language="en",
                    c_textDirection="lr",
                    c_title="Title",
                    c_text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem <a href=\"#\">ipsum dolor sit amet.</a>",
                    c_details="More details",
                    c_acceptButton="Accept all",
                    c_acceptConfigurationButton="Accept configuration",
                    c_necessaryButton="Necessary",
                    c_preferenceButton="Preferences",
                    c_statisticsButton="Statistics",
                    c_marketingButton="Marketing",
                    c_titleId=shortid.generate(),
                    c_textId=shortid.generate(),
                    c_moreDetailsLinkId=shortid.generate(),
                    c_moreDetailsDivId=shortid.generate(),
                    ...props} ) => (
    <dialog role="dialog" className={"cookie-alert" + (className ? " " + className : "")} {...props} lang={ c_language } dir={ c_textDirection } data-controller="cookie-alert" aria-labelledby={ c_titleId } aria-describedby={ c_textId }>
        <div className="cookie-alert-modal" aria-modal="true">
            <h2 className="cookie-alert-title" id={c_titleId}>{ c_title }</h2>
            <p className="cookie-alert-description" id={ c_textId } dangerouslySetInnerHTML={{__html: c_text }}></p>

            <div className="cookie-alert-controls">
                    <Button noBtnClass className="cookie-alert-button" tabIndex="1" data-controller="cookie-alert/button/accept">{ c_acceptButton }</Button>
                    <a href="#" className="cookie-alert-detail-link" tabIndex="2" data-controller="cookie-alert/detail-link" aria-controls={ c_moreDetailsDivId } id={ c_moreDetailsLinkId }>
                        { c_details }
                    </a>
            </div>

            <div className="cookie-alert-configuration" data-controller="cookie-alert/configuration" aria-controls={ c_moreDetailsDivId } aria-labelledby={ c_moreDetailsLinkId } aria-expanded="false" id={ c_moreDetailsDivId }>

                <div className="cookie-alert-configuration-settings">
                    <div className="cookie-alert-configuration-control">
                        <input type="checkbox" className="cookie-alert-configuration-input" id="necessary" tabIndex="2" checked disabled />
                        <label htmlFor="necessary" className="cookie-alert-checkbox-label">{ c_necessaryButton }</label>
                    </div>
                    <div className="cookie-alert-configuration-control">
                        <input type="checkbox" className="cookie-alert-configuration-input" id="preferences" tabIndex="2" />
                        <label htmlFor="preferences" className="cookie-alert-checkbox-label">{ c_preferenceButton }</label>
                    </div>
                    <div className="cookie-alert-configuration-control">
                        <input type="checkbox" className="cookie-alert-configuration-input" id="statistics" tabIndex="2" />
                        <label htmlFor="statistics" className="cookie-alert-checkbox-label">{ c_statisticsButton }</label>
                    </div>
                    <div className="cookie-alert-configuration-control">
                        <input type="checkbox" className="cookie-alert-configuration-input" id="marketing" tabIndex="2" />
                        <label htmlFor="marketing" className="cookie-alert-checkbox-label">{ c_marketingButton }</label>
                    </div>
                </div>

                <Button noBtnClass className="cookie-alert-button-secondary" tabIndex="2" data-controller="cookie-alert/button/configuration">{ c_acceptConfigurationButton }</Button>
            </div>
        </div>

    </dialog>
);

export default CookieAlert;
