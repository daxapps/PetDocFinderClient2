import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// import LoginForm from './login-form';
import Header from './header';
import ScreenShot from "../Images/screen-shot.jpg";
import ScreenShot2 from "../Images/screen-shot-2.jpg";


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
        <div className="screen-shot">
          <img src={ScreenShot2} alt="screen shot of vet list add service" />
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
