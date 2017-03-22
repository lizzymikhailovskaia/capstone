import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import PhotoList from './components/photo_list';
import Home from './components/home';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>hi</div>
        {this.props.children}
      </div>
    );
  }
}

//Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="locations">
        <Route path=":id/photos" component={PhotoList}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('container'));
