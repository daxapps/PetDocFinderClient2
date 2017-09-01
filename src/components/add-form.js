import React from "react";
import { Link } from "react-router-dom";

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
      <form className="card add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Service"
          ref={input => (this.serviceInput = input)}
        />
        <input
          type="text"
          placeholder="$00.00"
          ref={input => (this.priceInput = input)}
        />
        <button>Add</button>
        <button type="button" onClick={() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}
