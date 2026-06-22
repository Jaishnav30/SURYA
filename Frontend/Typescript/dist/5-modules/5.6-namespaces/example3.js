"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Extending a library via a namespace
var JQueryExtensions;
(function (JQueryExtensions) {
    function highlight(element) {
        element.css("background-color", "yellow");
    }
    JQueryExtensions.highlight = highlight;
})(JQueryExtensions || (JQueryExtensions = {}));
// Usage with an existing library
JQueryExtensions.highlight($(".my-element"));
