import React from 'react';
import './assets/styles/style.css';

// ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  REDUX
import { Provider } from 'react-redux';
import store from './store/store';

// Components
import Header from './components/Header';
import People from './components/People';
import NewPerson from './components/NewPerson';
import EditPerson from './components/EditPerson';

export default function() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Header />

          <div className="container">
            <Switch>
              <Route exact path="/" component={People} />
              <Route exact path="/people/new" component={NewPerson} />
              <Route exact path="/people/edit/:id" component={EditPerson} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}
