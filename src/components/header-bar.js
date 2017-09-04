import React from "react";
import { connect } from "react-redux";
import { setCurrentUser, setAuthToken } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { Link } from "react-router-dom";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <Link onClick={() => this.logOut()} to="">
          Log out
        </Link>
      );
    }
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item header-bar">
                {logOutButton}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
