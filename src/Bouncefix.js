var React = require('react');

var Bouncefix = React.createClass({
    displayName: 'Bouncefix',
    propTypes: {
        componentClass: React.PropTypes.node
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
        var el = this.getDOMNode();
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
      return React.createElement(this.props.componentClass, React.__spread({}, this.props, {
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
            onTouchCancel: this.onTouchEnd
      }), this.props.children);
    }
});

module.exports = Bouncefix;
