import React from 'react';
import Navigation from '../component/Navigation';
import Title from '../component/Title';
import ProjectFeedElement from '../component/ProjectFeedElement';

class ProjectsPage extends React.Component {
    constructor(){
        super();

        this.feed = [{
            id: "1",
            title: "some test subject",
            description: "Sem orci mi parturient ad phasellus condimentum non cras at mi nisi magnis suspendisse ornare adipiscing aliquam velit a est imperdiet a fermentum a arcu at.Aliquam adipiscing quis nec.",
            tags: ["html", "js", "webpack"]
        }, {
            id: "2",
            title: "some test subject again",
            description: "Sem orci mi parturient ad phasellus condimentum non cras at mi nisi magnis suspendisse ornare adipiscing aliquam velit a est imperdiet a fermentum a arcu at.Aliquam adipiscing quis nec.",
            tags: ["js", "webpack"]
        }];
    }

    renderFeed() {
        return this.feed.map( (item) => {
            return (
                <ProjectFeedElement key={item.id} feedItem={item} />
            );
        });
    }

    render() {
        var feed = this.renderFeed();
        return (
            <div>
                <Title heading="Projects" />                
                {feed}
                <Navigation />
            </div>
        );
    }
}

module.exports = ProjectsPage;
