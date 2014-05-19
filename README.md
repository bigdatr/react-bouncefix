react-bouncefix
===============

A [ReactJS](http://facebook.github.io/react/) component which stops elastic bouncing from moving the entire page(body) when scrollable element has reached the extremes.



Credit
-------
This is a ReactJS implementation of [@jaridmargolin](https://github.com/jaridmargolin)'s [bouncefix.js](http://jaridmargolin.github.io/bouncefix.js/)


Why?
----

IOS (since IOS 5) offers native touch scrolling within nested containers via `-webkit-overflow-scrolling: touch;`, however, if scrolling occurs at one of the extremes, top or bottom, the elastic bounce occurs on the page rather than the nested container. `bouncefix.js` offers a viable solution to fix this issue. `react-bouncefix` is a reuseable component for ReactJS based applications

**note:** If there is no content to scroll, scrolling is blocked on the container. This may cause issues if attempting to implement a scroll to refresh feature. This can be overcome creating a wrapper inside of your container and setting the height to 100% with a top and bottom padding of 1px (Not perfect, hackish, but it works)

##Install

    npm install react-bouncefix

##Example
For documentation on how to use react, check out http://facebook.github.io/react/docs/getting-started.html


###For projects using JSX
```js
/** @jsx React.DOM */
var ScrollableContainer = require('react-bouncefix');


var MyComponent = React.createClass({
  render: function() {
  	//You can (and probably should) specify these in your css file and just add the css className here instead
  	var inline_style = {
  		'overflow-y': 'auto',
		'overflow-x': 'hidden';
  	};

    return <ScrollableContainer style={inline_style}>Hello from MyComponent!</ScrollableContainer>;
  }
});

```
