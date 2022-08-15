import { useState } from 'react';
import './style.scss';
import './tailwind.css'
import Test from './Test';

function App() {
const [show, setShow] = useState(false)
  return (
    <>
    <button onClick={() => setShow(show => !show)}>
      {show ? ' Gizle' : 'Göster'}
    </button>
    { show && <Test/> }
    </>
  );
}

export default App;
