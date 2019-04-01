const initState = {
    todos: [
        {id: 1, todo:"Learn to implement kafka"},
        {id: 2, todo:"Learn to create apis"},
        {id: 3, todo:"Learn graphql"}
    ],
    id: 3
}

const rootReducer = (state=initState, action) => {
    let new_state = state;
    if(action.type === "DELETE_TODO") {
        let remaining_todos = state.todos.filter(todo => {
            return todo.id !== action.id;
        });
        new_state =  {
            ...state,
            todos: remaining_todos
        }
    } else if(action.type === "ADD_TODO") {
        let new_id = state.id + 1;
        let new_todos = [...state.todos, { id: new_id, todo:action.todo }];
        new_state = {
            ...state,
            todos: new_todos,
            id: new_id
        }
    }
    console.log(action.type);
    console.log(new_state);
    return new_state;
}

export default rootReducer;