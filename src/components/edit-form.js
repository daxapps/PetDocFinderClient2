import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, ControlLabel } from "react-bootstrap";

import "./edit-form.css";

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(event) {
    console.log("ANYTHING:");
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
        <div onClick={() => this.setEditing(true)}>
          <Link to="/dashboard">
            <button className="edit-button">
              <i className="fa fa-pencil" aria-hidden="true" />
            </button>
          </Link>
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
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
          <button
            className="cancel-btn"
            type="button"
            onClick={() => this.setEditing(false)}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </FormGroup>
      </div>
    );
  }
}
