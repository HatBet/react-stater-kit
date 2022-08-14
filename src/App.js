import { createElement, Fragment } from 'react';
import  './style.scss';


function App() {

  const todos = [ 'todo1', 'todo2', 'todo3']
  // const h1 = createElement('h1', null , 'pro')
  // const ul = createElement ('ul', null, todos.map(todo => createElement('li', null, todo)))

  // return createElement('main', {
  //   className: 'test',
  //   id:'main'
  // }, h1, ul)


  return (
    <Fragment>
      <h1 style={{color: 'red', backgroundColor: 'yellow'}}>pro</h1>
      <label htmlFor='search' tabIndex="2"> 
        Arama
      </label>
      <input type='index' id= 'search' tabIndex="1"/>


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
