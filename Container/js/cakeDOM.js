export default (() => {
    Element.prototype.siblingSelector = function(query){
        return this.parentNode.querySelector(query);
    };
    Element.prototype.siblingSelectorAll = function(query){
        return this.parentNode.querySelectorAll(query);
    };
    Window.prototype.resizeThrottled = function(eventMethod = () => {}, throttleSpeed = 66){
        (function () {
            let resizeTimeout;
            let resizeThrottler = () => {
                // ignore resize events as long as an actualResizeHandler execution is in the queue
                if (!resizeTimeout) {
                    resizeTimeout = setTimeout (() => {
                        resizeTimeout = null;
                        // handle the resize event
                        eventMethod ();
                        // The actualResizeHandler will execute at a rate of Xfps (default: 15fps)
                    }, throttleSpeed);
                }
            }
            window.addEventListener("resize", resizeThrottler, false);
        }());
    };
    //Add CustomEvent to all Browsers, if it does not exists [Polyfill](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill)
    (() => {
        if ( typeof window.CustomEvent === "function" ) return false;
        let CustomEvent = ( event, params ) => {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent( 'CustomEvent' );
            evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
            return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    })();
    //Add Polyfill for Element.closest ();
    (() => {
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                        Element.prototype.webkitMatchesSelector;
        }
        if (!Element.prototype.closest) {
            Element.prototype.closest = function(s) {
                var el = this;
                if (!document.documentElement.contains(el)) return null;
                do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
                } while (el !== null && el.nodeType === 1);
                return null;
            };
        }
    })();
    // bugfix - oldBrowser - IE 11 does not know forEach on NodeList [Polyfill](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    //Add Math method to calculate ease-in-out steps
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
      };
})();
