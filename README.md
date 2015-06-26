## Progress Plugin for Apache Cordova [![npm version](https://badge.fury.io/js/cordova-plugin-progress.svg)](http://badge.fury.io/js/cordova-plugin-progress)

**Cordova / PhoneGap Plugin for Progress HUD Notifications via [KVNProgress](https://github.com/kevin-hirsch/KVNProgress).**

## Demo

<img src="https://raw.github.com/leecrossley/cordova-plugin-progress/master/progress.gif" alt="Cordova Progress" width="180">

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

Show the basic indeterminate progress loader.

```js
// with success and error handlers
progress.show(successHandler, errorHandler);

// without callback functions
progress.show();
```

Show the basic indeterminate progress loader, with text. When text is supplied, the loader width is larger.

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

### update

Update the loader text on the fly (animated). If the loader was initiated without text, the width will remain smaller than if it was initiated with text.

```js
// with success and error handlers
progress.update(successHandler, errorHandler, {"text": "Still loading..."});

// with success and error handlers (shorthand)
progress.update(successHandler, errorHandler, "Still loading...");

// without callback functions
progress.update({"text": "Still loading..."});

// without callback functions (shorthand)
progress.update("Still loading...");
```

You can also use the update function to remove any previous text (an empty string is treated the same as omitting the string).

```js
// with success and error handlers
progress.update(successHandler, errorHandler);

// without callback functions
progress.update();
```

### hide

Hide the loader. Note that the `successHandler` is called after the loader has completely disappeared.

```js
// with success and error handlers
progress.hide(successHandler, errorHandler);

// without callback functions
progress.hide();
```

## Full basic example

```js
// after the cordova device ready event has fired
progress.show("Loading...");

setTimeout(function () {
    progress.update("Still loading...");
}, 1500);

setTimeout(function () {
    progress.hide();
}, 3000);
```

## Platforms

iOS (7+) only.

## License

[MIT License](http://ilee.mit-license.org)

[KVNProgress](https://github.com/kevin-hirsch/KVNProgress#license)
