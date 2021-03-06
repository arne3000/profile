﻿import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <h1>
                {this.props.heading}
            </h1>
        );
    }
}

Title.propTypes = {
    heading: React.PropTypes.string.isRequired
};

module.exports = Title;
