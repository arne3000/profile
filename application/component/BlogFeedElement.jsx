import React from 'react';
import { Link } from 'react-router'
import moment from 'moment';

class BlogFeedElement extends React.Component {
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
    buildTimestamp(time) {
        var timeAgo = moment(time).fromNow().toString();
        return (
            <span className="time">
                {timeAgo}
            </span>
        );
    }

    render() {
        var tags = this.buildTags(this.props.feedItem.tags);
        var timestamp = this.buildTimestamp(this.props.feedItem.published);
        return (
            <section>
                <Link to="/blog/some-blog-post">
                    <h1>{this.props.feedItem.subject}</h1> 
                    {tags} {timestamp}
                </Link>
            </section>
        );
    }
}

BlogFeedElement.propTypes = {
    feedItem: React.PropTypes.object.isRequired
};

module.exports = BlogFeedElement;
