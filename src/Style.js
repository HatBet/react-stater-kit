import Test from './Test';
import { Title } from './Components';
import './tailwind.css';
import './style.css'


function Styles () {
    return (
        <div className="App">
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.REACT_APP_API_URL}</Title>
      <Test></Test>
    </div>
    );
}

export default Styles