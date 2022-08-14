import './style.scss';
import Button from './components/Button';
import './tailwind.css'

function App() {

  const todos = ['todo1', 'todo2', 'todo3']
  // const h1 = createElement('h1', null , 'pro')
  // const ul = createElement ('ul', null, todos.map(todo => createElement('li', null, todo)))

  // return createElement('main', {
  //   className: 'test',
  //   id:'main'
  // }, h1, ul)


  return (
    <>
			<div style={{padding: 20}}>
				<Button>
					Buton Örneği
				</Button>
				<Button variant="success">
					Buton Örneği
				</Button>
				<Button variant="danger">
					Buton Örneği
				</Button>
				<Button variant="warning">
					Buton Örneği
				</Button>
			</div>
      <div>
        <Button text="Butondur" variants="success" />
      </div>
      <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>pro</h1>
      <label htmlFor='search' tabIndex="2">
        Arama
      </label>
      <input type='index' id='search' tabIndex="1" />


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
