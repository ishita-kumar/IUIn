import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import About from './components/dashboard/About';
import Contact from './components/contactus/Contact';
import ReactNotifications from 'react-notifications-component';
// import Homepage from './Homepage';  

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
      <ReactNotifications />
        <Fragment>
                    {/* <Navbar /> */}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path = "/About" >
            <About />
            </Route>
			<Route path = "/Contact" >
            <Contact />
            </Route>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
