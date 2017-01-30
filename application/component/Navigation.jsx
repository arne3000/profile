import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
    render() {
        return (
            <footer>
                <Link to="/" activeClassName="active">Contact</Link>
            </footer>
        );
    }
}

//<Link to="#" activeClassName="active">Projects</Link>

module.exports = Navigation;
