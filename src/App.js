import { useEffect } from 'react';
import './style.css'
import Test from './Test';
import { Title } from './Components';
import './tailwind.css';

function App() {
  useEffect(() => {
    if(process.env.NODE_ENV === 'production') {

    }
  }, [])

  return (
    <div className="App">
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.REACT_APP_API_URL}</Title>
      <Test></Test>
    </div>
  );
}

export default App;
