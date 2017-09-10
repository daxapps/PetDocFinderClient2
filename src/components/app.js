import React from "react";
import { connect } from "react-redux";
import { Route, withRouter, BrowserRouter } from "react-router-dom";

import "./app.css";

import TopNav from "./top-nav";
import LandingPage from "./landing-page";
import Dashboard from "./dashboard";
import RegistrationPage from "./registration-page";
import LoginPage from "./login-page";
import Footer from "./footer";

import { refreshAuthToken } from "../actions/auth";

export class App extends React.Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in
      // localStorage
      this.props.dispatch(refreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    let showTopNav = !this.props.loggedIn ? <TopNav /> : "";

    return (
      <BrowserRouter>
        <div className="app">
          {showTopNav}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
