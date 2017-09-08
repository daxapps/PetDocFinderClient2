import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import Header from './header';
import ScreenShot from "./screen-shot.jpg";


export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    window.scrollTo( 0, 0 );
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <Header />
      <section>
        <h3>Make an Informed Decision</h3>
        <p>
          Pet Doc Finder shows you veterinians located around you or around a
          location of your choice. Compare reviews and prices, so that you can
          choose which one will be the best to take care of your loved one.
        </p>
        <div className="screen-shot">
          <img src={ScreenShot} alt="screen shot of map and vet list" />
        </div>
      </section>
      <section>
        <h3>Help Others Make an Informed Decision</h3>
        <p>
          Help others who are looking for the best vet by adding the price of
          services from the vet that you like.
        </p>
      </section>
      <section>
        <h3>Welcome to Pet Doc Finder</h3>
        <div className="demo-info">
          <p>To access the demo account, please enter the following credentials.</p>
          <p>Username: Demo</p>
          <p>Password: password</p>
        </div>
        <LoginForm />
        <Link to="/register">Register</Link>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
