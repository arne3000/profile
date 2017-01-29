import React from 'react';
import { Link } from 'react-router';

class ProjectFeedElement extends React.Component {
    constructor(props){
        super(props);
    }

    buildTags(tags) {
        var i = 1;
        return tags.map((item) => {
            return (
                <span className="tag" key={i++}>
                    {item}
                </span>
            );
        });
    }

    render() {
        var title = this.props.feedItem.title;
        var description = this.props.feedItem.description;
        var tags = this.buildTags(this.props.feedItem.tags);
        return (
            <section>
                <Link to="/project/some-project">
                    <p className="title">{title}</p> 
                    <p>{description}</p>
                    <p className="footer">{tags}</p>
                </Link>
            </section>
        );
    }
}

ProjectFeedElement.propTypes = {
    feedItem: React.PropTypes.object.isRequired
};

module.exports = ProjectFeedElement;
