import React from "react";
import TopNav from "./top-nav";
import Header from "./header";
import Footer from "./footer";
import "./app.css";

import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import HeaderBar from "./header-bar";
import LandingPage from "./landing-page";
import Dashboard from "./dashboard";
import RegistrationPage from "./registration-page";
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
    return (
      <div className="app">
        <TopNav />
        <Header />
        <section>
          <h3>Make an Informed Decision</h3>
          <p>
            Pet Doc Finder shows you veterinians located around you or around a
            location of your choice. Compare reviews and prices, so that you can
            choose which one will be the best to take care of your loved one.
          </p>
        </section>
        <section>
          <h3>Help Others Make an Informed Decision</h3>
          <p>
            Help others who are looking for the best vet by adding the price of
            services from the vet that you like.
          </p>
        </section>
        <section>
        <Route exact path="/" component={LandingPage} />
        </section>
        <section>
        <Route exact path="/dashboard" component={Dashboard} />
        </section>
        <section>
          <HeaderBar />
          <Route exact path="/register" component={RegistrationPage} />
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
