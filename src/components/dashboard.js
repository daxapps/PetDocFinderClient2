import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchProtectedData } from "../actions/protected-data";

// import Vet from "./vet";
import GoogleMap from "./googlemap";

export class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    // Only visible to logged in users
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    const styleSheet = this.props.showAddService ? "block" : "none";
    // console.log("PROPS_SHOWAS: ", this.props.showAddService);
    const style = { textAlign: "center" };

    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">
          Name: {this.props.name}
        </div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
        <div>
          <h1 style={style}>Pet Doc Finder</h1>
          <div>
            <GoogleMap />
          </div>
          <div style={{ display: styleSheet }}>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    loggedIn: currentUser !== null,
    username: currentUser ? state.auth.currentUser.username : "",
    name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "",
    protectedData: state.protectedData.data,
    showAddService: state.vet.showAddService
  };
};

export default connect(mapStateToProps)(Dashboard);
