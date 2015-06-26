## Progress Plugin for Apache Cordova [![npm version](https://badge.fury.io/js/cordova-plugin-progress.svg)](http://badge.fury.io/js/cordova-plugin-progress)

**Cordova / PhoneGap Plugin for Progress HUD Notifications via [KVNProgress](https://github.com/kevin-hirsch/KVNProgress).**

## Install

#### Latest published version on npm (with Cordova CLI >= 5.0.0)

```
cordova plugin add cordova-plugin-progress
```

#### Latest version from GitHub

```
cordova plugin add https://github.com/leecrossley/cordova-plugin-progress.git
```

You **do not** need to reference any JavaScript, the Cordova plugin architecture will add a `progress` object to your root automatically when you build.

## Usage

### show

Show the basic indeterminate progress loader, with optional text.

```js
// with success and error handlers
progress.show(successHandler, errorHandler, {"text": "Loading..."});

// with success and error handlers (shorthand)
progress.show(successHandler, errorHandler, "Loading...");

// without callback functions
progress.show({"text": "Loading..."});

// without callback functions (shorthand)
progress.show("Loading...");
```

## Platforms

iOS only.

## License

[MIT License](http://ilee.mit-license.org)

[KVNProgress](https://github.com/kevin-hirsch/KVNProgress#license)
