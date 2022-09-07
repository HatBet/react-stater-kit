import { useReducer}  from "react"
import AddTodo from "./AddTodo";
import todoReducer from "./reducers/todoReducer";
import TodoList from "./todoList";

function Todo() {
    console.log('app render');
    const [state, dispatch] =useReducer(todoReducer, {
        todos:[],
        todo:''
    })

    // const [todos, setTodos] = useState([])
    // const [todo, setTodo] = useState()

    const submitHandle = e =>{
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    }

    const onChange = e =>  {
        //setTodo(e.target.value)
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }
    return (
        <>
        <h1>Todo App</h1>
            <AddTodo onChange={onChange}  submitHandle={submitHandle} state= {state} />
            <TodoList todos={state.todos} />
        </>
    )
}

export default Todo;