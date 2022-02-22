import './App.css';
import { Greet } from './Components/FunctionComponent/Greet';
import Hello from './Components/FunctionComponent/Hello';
import Message from './Components/ClassComponents/Message';
import Welcome from './Components/ClassComponents/Welcom';
import Counter from './Components/ClassComponents/Counter';
import FunctionClick from './Components/FunctionComponent/FunctionClick';
import ClassClick from './Components/ClassComponents/ClassClick';
import Event from './Components/ClassComponents/Event';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Harry styles" profasion="singing"/> */}
        {/* 
        <Welcome name="Harry"/>
        <Welcome name="Ankita"/> */}
        {/* <Hello/>
        <Message/> */}
        {/* <Counter name="Harry styles" profasion="singing"/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        <Event/>
    </div>
  );
}

export default App;
