import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import PhotoList from './components/photo_list';
import Home from './components/home';
import TripList from './components/trip_list';
import TripCreate from './components/trip_create';
import TripEdit from './components/trip_edit';
import LocationEdit from './components/location_edit';
import LocationCreate from './components/location_create';
import Trip from './components/trip';
import Location from './components/location';

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

      <Route path="/trips" component={TripList}/>
      <Route path="/trips/new" component={TripCreate}/>
      <Route path="/trips/:id/edit" component={TripEdit}/>
      <Route path="/trips/:id" component={Trip}/>

      <Route path="/trips/:id/new-location" component={LocationCreate}/>
      <Route path="/locations/:id/edit" component={LocationEdit}/>
      <Route path="/locations/:id" component={Location}/>
      <Route path="locations">
        <Route path=":id/photos" component={PhotoList}/>
      </Route>

    </Route>
  </Router>
), document.getElementById('container'));
