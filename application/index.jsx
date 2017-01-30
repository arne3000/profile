import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//components
import Header from './component/Header';

//pages
import HomePage from './view/HomePage';
import ProjectsPage from './view/ProjectsPage';
import ProjectPage from './view/ProjectPage';
import ContactPage from './view/ContactPage';
import BlogPage from './view/BlogPage';

class App extends React.Component {
  render () {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={ContactPage}/>
        </Router>
    );
  }
}

//<Route path="/contact" component={ContactPage}/>
//<Route path="/blog/:blogId" component={BlogPage}/>
//<Route path="/project/:projectId" component={ProjectPage}/>

//fixed components
render(<App/>, document.getElementById('react-page'));
render(<Header/>, document.getElementById('header-component'));