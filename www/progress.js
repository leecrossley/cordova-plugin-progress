
var exec = require("cordova/exec");

var Progress = function () {
    this.name = "Progress";
};

Progress.prototype.show = function (onSuccess, onError, options) {
    exec(onSuccess, onError, "Progress", "show", [options]);
};

Progress.prototype.update = function (onSuccess, onError, options) {
    exec(onSuccess, onError, "Progress", "update", [options]);
};

Progress.prototype.hide = function (onSuccess, onError) {
    exec(onSuccess, onError, "Progress", "hide");
};

module.exports = new Progress();
