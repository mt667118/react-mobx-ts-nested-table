import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import './App.css';
import { PersonStore } from 'store/PersonStore';

import PersonTable from './main-dashboard/PersonTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import NotFoundPage from './not-found-page';

class App extends Component {
  private personStore: PersonStore = new PersonStore();

  render() {
    return (
      <Provider personStore={this.personStore}>
        <div className="App-container">
          <Router>
            <Switch>
              <Route exact path="/" component={PersonTable} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
