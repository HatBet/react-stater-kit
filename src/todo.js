import { useReducer}  from "react"
import todoReducer from "./reducers/todoReducer";

function Todo() {
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
    console.log(state)
    return (
        <>
        <h1>Todo App</h1>
        <form onSubmit={submitHandle}>
            <input type="text" value={state.todo} onChange={onChange} />
            <button type="submit" disabled={!state.todo}> Ekle</button>
        </form>
        <ul>
            {state.todos.map((todo, index) => (
                  <li key={index}>
                  {todo}
              </li>
            ))}
        </ul>
        </>
    )
}

export default Todo;