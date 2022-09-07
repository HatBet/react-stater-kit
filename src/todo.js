import { useReducer, useState, useCallback, useMemo}  from "react"
import AddTodo from "./AddTodo";
import todoReducer from "./reducers/todoReducer";
import TodoList from "./todoList";

function Todo() {
    console.log('app render');

    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(todoReducer, {
        todos:[],
        todo:'',
        search: ''
    })

    // const [todos, setTodos] = useState([])
    // const [todo, setTodo] = useState()


    //bir method componente her zaman çağırılmıyorsa saece çağırıldığında devreye girsin useCallback
    const submitHandle =useCallback( e =>{
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    }, [state.todo])

    const onChange = useCallback(e =>  {
        //setTodo(e.target.value)
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }, [])
 
    const searchHandle = e => {
        dispatch({
            type: 'SET_SEARCH',
            value: e.target.value
        })
    }

    const filteredTodos = useMemo(() => {
        return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase()));
    }, [state.todos, state.search])

    // state.todos ve state.search deişirse hesapla

    return (
        <>
        <h1>Todo App</h1>
            <h3>{count}</h3>
            <button onClick={()=> setCount(count+1)}>Arttır</button>
            <hr/>
            <h5>Aramak istediğin değer</h5>
            <input type="text" placeholder="Todolarda ara" value={state.search} onChange={searchHandle}  />
            {state.search}
            <hr/>
            <AddTodo onChange={onChange}  submitHandle={submitHandle} todo= {state.todo} />
            <TodoList todos={filteredTodos} />
        </>
    )
}

export default Todo;