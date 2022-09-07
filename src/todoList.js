import TodoItem from "./todoItem";
import {memo} from "react";

function TodoList({todos}){
    return(<ul>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))}
    </ul>)
}
export default memo(TodoList);