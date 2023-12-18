import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import DataFetchingIndividual from './components/DataFetchingIndividual';
import DataFetchingButton from './components/DataFetchingButton';
// import ClassCounterOne from './components/ClassCounterOne';
function App() {
  return (
    <div className="App">
      <DataFetchingButton></DataFetchingButton>
      {/* <DataFetchingIndividual></DataFetchingIndividual> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <IntervalClassCounter></IntervalClassCounter> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <HookMouse></HookMouse> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
    </div>
  );
}

export default App;
