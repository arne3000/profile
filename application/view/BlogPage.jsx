import React from 'react';
import Navigation from '../component/Navigation';

class BlogPage extends React.Component {
    render() {
        return (
            <div>
                Blog {this.props.params.blogId}
                <hr/>
                <p>some text</p>
                <Navigation />
            </div>
        );
    }
}

module.exports = BlogPage;
