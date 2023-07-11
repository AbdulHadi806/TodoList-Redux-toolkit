import { createSlice } from "@reduxjs/toolkit"

 const todoSlicer = createSlice({
    name: "todos",
    initialState :  [
            { id: 1, title: "Hit the gym", completed: false },
            { id: 2, title: "Meet George", completed: true}
        ],
    reducers: {
        addToDo: (state, action) => {
            const newTodo = {
                id: Math.random(),
                title: action.payload,
                completed: false
            }
            state.push(newTodo)
        },
        deleteTodo: (state, action) => {
            return  state.filter(item => {
               return item.id != action.payload.id
            })
        },
    }
})
export const { addToDo, deleteTodo } = todoSlicer.actions
export default todoSlicer.reducer;