import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
// import ClassCounterOne from './components/ClassCounterOne';
function App() {
  return (
    <div className="App">
      <MouseContainer></MouseContainer>
      {/* <HookMouse></HookMouse> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
    </div>
  );
}

export default App;
