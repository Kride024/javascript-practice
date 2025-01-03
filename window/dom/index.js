//* DOM IN JaVASCRIPT

//? when a web browser loads an HTML document, it parses the HtML source code and creates a tree-like structure known
//? as the Document Object Model (DOM). This DOM tree represents the structure of the HTML document,with each HTML element
//? being a node in the tree.

//?This entire DOM tree is then accessible to Javascript as an object.JavaScript can interact with this object to
//? manipulate the content , structure, and style of the document dynamically.The DOM essentially serves as an interface
//? between the HTML document and JavaScript,providing a way for script to access and modify the document's structure and content.


//todo The Document Object Model(DOM) is an Application Programming Interface(API). The DOM Tree is the structure of your HTMl document,
//as represent by the DOM API. As stated, this API then gives us many method and properties that can use to manipulate the Tree,
// and therefore,by extension,the document.

//* Here is a types of nodes in js:

//? Element node: An HTML tag, the tree building block.

//? Text node: In the DOM tree,text content,including new lines,spaces,and tabs,is treated as text nodes.

//? Attribute node: An attribute of sn element.

//? Comment node:Represent comments within the HTML document.

//? Processing instruction node: A processing instruction node,such as <? xml-stylesheet _ ?>.

//? Document node: A document node.

//? Document type node: A document type node,such as <! DOCTYPE html>.

//* DOM Properties and Methods

//! DOM Properties
//document
//getElementById(id)
//getElementByClassName(className)
//getElementByTagName(tagName)
//querySelector(selector)
//querySelectorAll(selector)
//innerHTML
//textContent
//style

//! DOM Methods:
//createElement(tagName)
//appendChild(node)
//removeChild(node)
//addEventListener(event,function)
//removeEventListener(event,function)
//setAttribute(name,value)
//getAttribute(name)
//parentNode / parentElement
//childNodes / children
// firstChild / firstElementChild;
//lastChild / lastElementChild
// nextSibling/ nextElementSibling
//previousSibling/previousElementSibling
// closest(selector)
//forEach(Array.from) 

//* DOM Navigation

//? different represent the entire document
// console.log(document);

//? parentNode / parentElement
//Navigate to the parent node or element.

//Document and DocumentFragment nodes can never have a parent ,so parentNode will always return null.it also
//null if the node has just been created and is not yet attached to the tree.

//? childNodes / children:
//Navigate to child nodes or elements.

//childNodes is a property that returns a NodeList containing all child nodes of a given element,including 
//text nodes and comment nodes.

//? firstChild/firstElementChild:
//Navigate to the first child node or element

//todo The element suffix in firstElement and similar properties signifies that only element nodes are considered.

//? lastChild / lastElementChild:
// Navigate to the last child nodes or element.

//? nextSibling / netElementSibling:
//Navigate to the next sibling node or element.

//?previousSibling/ previousElementSibling:
//Navigate to the previous sibling node or element.

//? closest(selector):
//Find the closest ancestor of the current element that matches a given selector.


//*DOM Filtering

//? childNodes / children:
//Get a NodeList or HTMLCollection and filter based on your criteria.

//? Filtering Siblings:
//?nextSibling/nextElementSibling
//?previousSibling/previousElementSibling

//?closest(selector):
//?Find closest ancestor that matches a given selector.
//?The closest(selector) method is used to find the closest ancestor of an element that matches a specifier CSS
//selector .This method traverses up the DOM tree,starting from the current element, and return first ancestor that
//matches the provided selector. If no matching ancestor is found,it return it null.

//* DOM Searching

//? getElementById(id): Find an element by its ID.

//? getElementByClassName(className): Find elements with a specified class name.

//? getElementByTagName(tagName): Find elements with a specified tag name.

//? querySelector(selector): Find the first element that matches the specified CSS selector.

//? querySelectorAll(selector): Find all elements that match the specified CSS selector.

//* DOM - CRUD(Create,Read,Update,Delete):

//? createElement(tagName): Create a new HTML element.

//?appendChild(node): Append a node as the last child of a parent node.

//?removeChild(node): Remove a child node from its parent.

//?addEventListener(event,function):Create an event listener to handle events.

//?removeEventListener(event,function):Remove an event Listener.

//?setAttribute(name,value):Set the value of an attribute on an element.

//?getAttribute(name):Get the value of a specific attribute on an element.

//?innerHTML:Read or update the HTML content of an element.

//* DOM-Iteration:

//?Iteration:
//?for Each (Array.from): Iterate through NodeList or convert to an array for more flexible manipulation.

//Very important
//* when you use the browser's development tools console to select an element and change its text content using
//* javascript, you are directly manipulating the DOM object in memory.Since the DOM is a live representation of the
//* document , any change you make to the DOM objects are immediately reflected in the rendered web page.

// However, these changes are typically temporary and exist only in the current session. When you reflect the page or
//navigate array, the browser reloads the original HTML document from the server, and the DOM is reconstructed during the 
//parsing process.Any modifications made to the DOM objects during the previous session are lost,and the page reverts 
//to its original state.