import React from 'react';
import Navigation from '../component/Navigation';
import Title from '../component/Title';

class ProjectPage extends React.Component {
    render() {
        return (
            <div>
                <Title heading={this.props.params.projectId} />
                <p>some text</p>
                <Navigation />
            </div>
        );
    }
}

module.exports = ProjectPage;
