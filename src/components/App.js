import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import UserDetails from './UserDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container-fluid">
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/user/:id"
            render={props => <UserDetails {...props} isAuthed={true} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
