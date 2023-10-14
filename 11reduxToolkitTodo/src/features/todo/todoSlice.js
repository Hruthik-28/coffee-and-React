import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: 1, text: 'hello todo1'}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    //reducers - functionality, has properties: function()
    //has access to state and action 
    // state: has access to values of intital state or store cuurent state or and updates to initailState or store can be done through state only
    // action: values or data passed can be accesed using action.payload
    reducers: { 
        // In context api we used to property and just say it is a function but here we also write the defination of the function
        addTodo: (state, action) => { 
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, todoMsg} = action.payload
            state.todos.map((todo) => todo.id === id ? todo.text = todoMsg : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export const {todo} = initialState

export const TodoReducer = todoSlice.reducer