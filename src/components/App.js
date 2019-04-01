import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import '../index.css';

class App extends Component {

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    }

    addTodo = (todo) => {
        this.props.addTodo(todo);
    }

    render() {

        const { todos } = this.props;

        return (
            <div className="container card">
                <h1 className="center">Todo</h1>
                <TodoList todos={ todos } deleteTodo={ this.deleteTodo } />
                <AddTodo addTodo={ this.addTodo } />
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch({ 
                type: "DELETE_TODO",
                id
            })
        },
        addTodo: (todo) => {
            dispatch({
                type: "ADD_TODO",
                todo
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);