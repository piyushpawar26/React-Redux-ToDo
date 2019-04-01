import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        todo: ""
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ""
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>Add Todo:</label>
                <input type="text" onChange={ this.handleChange } value={ this.state.todo } />
            </form>
        );
    }

}

export default AddTodo;
