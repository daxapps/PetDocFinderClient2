import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormGroup, ControlLabel } from "react-bootstrap";

import "./edit-form.css";
import { deleteService } from "../actions/services";
import RedPawBtn from "../Images/paw-btn-red.png";
import GreyPawBtn from "../Images/paw-btn-grey.png";
import BluePawBtn from "../Images/paw-btn-blue.png";
import BlackPawBtn from "../Images/paw-btn-black.png";

export class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(event) {
    event.preventDefault();
    const serviceText = this.serviceInput.value.trim();

    if (serviceText && this.props.onAdd) {
      this.props.onAdd(this.serviceInput.value, this.priceInput.value);
    }
    this.serviceInput.value = "";
    this.priceInput.value = "";
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div>
          <div onClick={() => this.setEditing(true)}>
            <Link to="/dashboard">
              <button className="edit-button">
                <img src={GreyPawBtn} />
                Edit
              </button>
            </Link>
          </div>
          <div>
            <button
              className="delete-btn"
              onClick={this.props.onDeleteClick}
              data-service-id={this.props.formServiceId}
            >
              <img src={RedPawBtn} />
              Delete
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="edit-form">
        <FormGroup controlId="formInlineName" className="edit-service-name">
          <ControlLabel>Service</ControlLabel>{" "}
          <input
            type="text"
            defaultValue={this.props.formService}
            placeholder="Service"
            ref={input => (this.serviceInput = input)}
          />
        </FormGroup>
        <FormGroup controlId="formInlineName" className="edit-service-price">
          <ControlLabel>Price</ControlLabel>{" "}
          <input
            type="text"
            defaultValue={this.props.formPrice}
            placeholder="$00.00"
            ref={input => (this.priceInput = input)}
          />
        </FormGroup>{" "}
        <FormGroup controlId="formInlineName">
          <button className="plus-btn" onClick={this.onEditClick}>
            <img src={BluePawBtn} />
            Add
          </button>
          <button
            className="cancel-btn"
            type="button"
            onClick={() => this.setEditing(false)}
          >
            <img src={BlackPawBtn} />
            Cancel
          </button>
        </FormGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: btn => {
      console.log("BTNTARGET:", btn.currentTarget);
      deleteService(
        btn.currentTarget.getAttribute("data-service-id"),
        dispatch
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
