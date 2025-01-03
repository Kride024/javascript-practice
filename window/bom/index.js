//? window properties

//? window.console:
//Represents the browser's debugging console.
//Allows logging message using methods like log(), warn(),and error().

//? window.innerWidth / window.innerHeight:
//provide width and height of the browser's content area (excluding toolbar and scrollbar)

//?window.scrollX / window.scrollY:
//Represents the number of pixels that the document Is currently scrolled horizontally and vertically.

//?window.outerWidth / window.outerHeight:
//Provides the width and height of the whole browser window (including toolbars and borders)

//?window.localStorage:
//Provides a way to store key-values pairs persistently on the user's device.
// allows storing data beyond the lifetime of a single page session.

//* Functions alert/confirm/prompt are also a part of BOM:
//They are directly not related to the document,but represent pure browser method of communication with the user.

//?window Object:
//? Represent the global window containing the BOM.
//Ex: window.location, window.innerwidth,window.innerHeight.

//?navigator object:
//Provides information about the browser.
//Ex: navigator.userAgent, navigator.language.

//?location object:
//Represents the current URL of the browser.
//EX: window.location.href,window.location.hostname

//?history object:
//Represent the session history,allowing navigation through the browser history.
//Example: window.history.back(), window.history.forward().

//?screen object:
//Represents information about the user's screen.
//Example: window.screen.width, window.screen.height

//?window.localStorage, window.sessionStorage
//objects for storing data persistently or for the duration of a page session.

//? document object:
// Represents the DOM of the currently displayed document.

//* 1. Navigator Object:
// The javascript navigator object is used for browser detection.It can be used to get browser information
//such as appName,appCodeName,userAgent etc.

//? navigator.userAgent(Property):
//Returns the user agent string of the browser.
//Example: console.log(navigator.userAgent)

//?navigator.language(Property):
//Returns the language preference of the user's browser
//Example: console.log(navigator.language)

//?navigator.cookieEnable(Property):
//Indicates whether cookies are enable in the browser
// console.log(navigator.cookieEnabled);

//? navigator.platform(Property):
//Returns the platform on which the browser is running
//console.log(navigator.platform);

//? navigator.onLine(Property):
//Indicates whether the browser is online.
// console.log(navigator.onLine);

//* 2: History object:

//The javascript history object represents an array of URLs visited by the user.
// By using this object,you can load previous,forward or any particular page.

//* 3: location Object:

//? window.location.href (Property):
//Returns or sets the complete URL of the current page.
//Example: console.log(window.location.href);

//?window.location.hostname(property):
//Return the domain name of the web host.
//Example: console.log(window.location.hostname);

//?window.location.assign(url) (Method):
// Navigates to the specified URL.
// Example: window.location.assign("https://www.example.com");

//?window.location.reload(forceReload)  (Method):
//Reloads the current page.
//example: window.location.reload(true).

//? window.location.search (Property):
//Returns the query string part of the URL.
//Example: console.log(window.location.search);

//*4: screen object:
//? window.screen.width and window.screen.height (Properties):
// Represent the width and height of the user's screen.
// console.log(window.screen.width);

//?window.screen.availWidth and window.screen.availHeight (properties):
//Represent the available width and height of the user screen.//!(excluding taskbar).
// console.log(window.screen.availHeight);

//? window.screen.colorDepth(Property):
//Returns the number of bits used to represent the color of each pixel.
// console.log(window.screen.colorDepth);

//? window.screen.orientation (Property):
//Returns the current orientation of the user's screen.
//Example: console.log(window.screen.orientation);

//? window.screen.pixelDepth (Property)
// Returns the number of bits used to represent each pixel
// Example:  console.log(window.screen.pixelDepth);

