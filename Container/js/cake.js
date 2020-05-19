import svg4everybody from "svg4everybody";
import accordion from "./accordion";
import alert from "./alert";
import cookieAlert from "./cookieAlert";
import form from "./form";
import header from "./header";
import popover from "./popover";
import subnavigation from "./subnavigation";
import tab from "./tab";
import themeSlider from "./themeSlider";
import toTop from "./toTop";
import "./cookieAlert-extended";

( () => {
    svg4everybody();

    //Scripts to load when document-loaded
    accordion ();
    alert ();
    cookieAlert();
    form();
    header ();
    popover ();
    subnavigation ();
    tab ();
    themeSlider.initializeAllSliders ();
    toTop ();
})();
