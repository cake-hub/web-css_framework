//Import Polyfills and external dependencies
import svg4everybody from "svg4everybody";

//Import CAKE Dependencies as you want (you can simply remove the lines you do not need)
import accordion from "../../../js/accordion";
import alert from "../../../js/alert";
import cookieAlert from "../../../js/cookieAlert";
import form from "../../../js/form";
import header from "../../../js/header";
import popover from "../../../js/popover";
import subnavigation from "../../../js/subnavigation";
import tab from "../../../js/tab";
import themeSlider from "../../../js/themeSlider";
import totop from "../../../js/toTop";
import "../../../js/cookieAlert-extended";

( () => {
    //Run external dependencies
    svg4everybody ();

    //Scripts to load when document-loaded
    accordion ();
    alert ();
    cookieAlert();
    form ();
    header ();
    popover ();
    subnavigation ();
    tab ();
    themeSlider.initializeAllSliders ();
    totop ();
})();
