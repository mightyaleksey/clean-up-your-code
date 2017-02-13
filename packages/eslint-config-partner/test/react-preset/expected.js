'use strict';

const {Component, PropTypes} = require('react');
const React = require('react');

class Button extends Component {
    _onClick = e => {
        this.props.onClick(e);
    }
    render() {
        const {children,className} = this.props;

        return (
      <Button
        className={className}
        onClick={this._onClick}>{children}</Button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

module.exports = Button;
