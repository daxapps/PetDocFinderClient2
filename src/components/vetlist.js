// import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchReviews } from "../actions";

class Vetlist extends Component {

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    return (
      <div>      
        Vet List      
      </div>
      );
  }


}


// function mapStateToProps(state) {
//   return { posts: state.posts };
// }

const mapDispatchToProps = (dispatch) => { 
  return { fetchReviews: (reviews) => dispatch(fetchReviews()) 
  }; 
};

export default connect(null, mapDispatchToProps)(Vetlist);