var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var createClass = require('create-react-class');
var assign = require('object-assign');

var Bouncefix = createClass({
    displayName: 'Bouncefix',
    propTypes: {
        componentClass: PropTypes.node
    },
    getDefaultProps: function() {
        return {
            componentClass: 'div'
        };
    },
    scrollToEnd: function(el) {
        var curPos = el.scrollTop,
            height = el.offsetHeight,
            scroll = el.scrollHeight;

        // If at top, bump down 1px
        if(curPos <= 0) { el.scrollTop = 1; }

        // If at bottom, bump up 1px
        if(curPos + height >= scroll) {
            el.scrollTop = scroll - height - 1;
        }
    },
    onTouchStart: function(e) {
        var el = ReactDOM.findDOMNode(this);
        var isScrollable = el.scrollHeight > el.offsetHeight;

        // If scrollable, adjust
        if (isScrollable) {
            this._blockTouchMove = false;
            return this.scrollToEnd(el);
        }
        // Else block touchmove
        else {
            this._blockTouchMove = true;
        }

    },
    onTouchMove: function(e) {
        if (this._blockTouchMove) {
            e.preventDefault();
        }
    },
    onTouchEnd: function(e) {
        this._blockTouchMove = false;
    },
    render: function() {
      var props = assign({}, this.props, {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd,
        onTouchCancel: this.onTouchEnd
      });
      delete props.componentClass;
      
      return React.createElement(this.props.componentClass, props, this.props.children);
    }
});

module.exports = Bouncefix;
