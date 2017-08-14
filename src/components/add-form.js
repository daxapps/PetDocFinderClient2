import React from 'react';

import './add-form.css';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const serviceText = this.serviceInput.value.trim();
        const priceText = this.priceInput.value.trim();

        if (serviceText && this.props.onAdd) {
            this.props.onAdd(this.serviceInput.value, this.priceInput.value);
        }
        this.serviceInput.value = '';
       
        this.priceInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                    <a href="#">Add a {this.props.type}...</a>
                </div>
            );
        }

        return (
            <form className="card add-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Service" ref={input => this.serviceInput = input} />
                <input type="text" placeholder="$00.00" ref={input => this.priceInput = input} />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}