import TodoItem from "./todoItem";

function TodoList({todos}){
    return(<ul>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))}
    </ul>)
}
export default TodoList;