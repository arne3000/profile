import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <a href="/" className="header">
                <img src="/name_header.jpg" alt="header" />
            </a>
        );
    }
}

module.exports = Header;
