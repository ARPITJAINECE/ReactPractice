import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">

    <EventBind></EventBind>
    {/* <FunctionClick></FunctionClick> */}
    {/* <ClassClick></ClassClick> */}

      {/* <Greet name='Arpit' heroName='Batman'>
        <p>this is the children props</p>
      </Greet> */}

      {/* <Greet name='Jain' heroName='Superman'>
        <button>push</button>
      </Greet> */}
      
      {/* <Welcome name='Arpit' heroName='Batman'></Welcome>  */}
      {/* <Welcome name='Jain' heroName='Superman'></Welcome>  */}
      
      {/* <Hello></Hello> */}

      {/* <Message></Message> */}

      {/* <Counter></Counter> */}
      
    </div>
  );
}

export default App;
