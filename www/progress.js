
var exec = require("cordova/exec");

var Progress = function () {
    this.name = "Progress";
};

Progress.prototype.show = function (onSuccess, onError, options) {
    if (arguments.length === 1 && typeof (arguments[0]) !== "function") {
        options = arguments[0];
        arguments[0] = null;
    }
    if (typeof (options) === "string") {
        options = {"text": options};
    }
    if (typeof (options) === "undefined") {
        options = {"text": ""};
    }
    exec(onSuccess, onError, "Progress", "show", [options]);
};

Progress.prototype.update = function (onSuccess, onError, options) {
    if (arguments.length === 1 && typeof (arguments[0]) !== "function") {
        options = arguments[0];
        arguments[0] = null;
    }
    if (typeof (options) === "string") {
        options = {"text": options};
    }
    if (typeof (options) === "undefined") {
        options = {"text": ""};
    }
    exec(onSuccess, onError, "Progress", "update", [options]);
};

Progress.prototype.hide = function (onSuccess, onError) {
    exec(onSuccess, onError, "Progress", "hide");
};

module.exports = new Progress();
