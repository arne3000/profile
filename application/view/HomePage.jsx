import React from 'react';
import Navigation from '../component/Navigation';
import BlogFeedElement from '../component/BlogFeedElement';

class HomePage extends React.Component {
    constructor(){
        super();

        this.feed = [{
            id: "1",
            subject: "some test subject",
            published: new Date(2016, 10, 25, 12, 0, 0, 0),
            tags: ["html", "js", "webpack"]
        }, {
            id: "2",
            subject: "some test subject again",
            published: new Date(2016, 10, 25, 10, 0, 0, 0),
            tags: ["js", "webpack"]
        }];
    }

    render() {
        var list = this.feed.map( (item) => {
            return <BlogFeedElement key={item.id} feedItem={item} />;
        });
        return (
            <div>
                Recent Posts
                <hr/>
                {list}
                <Navigation />
            </div>
        );
    }
}

module.exports = HomePage;
