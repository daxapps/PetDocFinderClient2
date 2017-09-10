import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
	// If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    window.scrollTo( 0, 0 );
    return <Redirect to="/dashboard" />;
  }

	return (
		<div>
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

		)
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
