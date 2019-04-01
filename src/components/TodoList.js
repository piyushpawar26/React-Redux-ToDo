import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {

    const list = todos.map(todo => {
        return (
            <li className="collection-item" key={ todo.id } onClick={ () => { deleteTodo(todo.id) } } >{ todo.todo }</li>
        );
    });

    return list.length > 0 ? (
        <ul className="collection">
            { list }
        </ul>
    ) : (
        <div className="center">No ToDo's left!</div>
    );

}

export default TodoList;