import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, ControlLabel } from "react-bootstrap";

import "./add-form.css";

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
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
        <div className="add-button" onClick={() => this.setEditing(true)}>
          <Link to="/dashboard">
            Add a {this.props.type}...
          </Link>
        </div>
      );
    }

    return (
      <Form inline className="add-form" onSubmit={this.onSubmit}>
        <FormGroup className="add-form-group service-input-section" controlId="formInlineName">
        <ControlLabel>Service</ControlLabel>
        {' '}
        <input
          type="text"
          placeholder="Service"
          ref={input => (this.serviceInput = input)}
        />
        </FormGroup>
        <FormGroup className="add-form-group price-input-section" controlId="formInlineName">
        <ControlLabel>Price</ControlLabel>
        {' '}
        {'$'}
        <input
          className="price-input"
          type="text"
          placeholder="00.00"
          ref={input => (this.priceInput = input)}
        />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineName">
        <button className="plus-btn">
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        <button type="button" className="cancel-btn" onClick={() => this.setEditing(false)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        </FormGroup>
      </Form>
    );
  }
}
