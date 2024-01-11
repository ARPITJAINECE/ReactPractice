import logo from './logo.svg';
import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CoounterTwo';

function App() {
  return (
    <div className="App">
      <CounterTwo></CounterTwo>
      <CounterOne></CounterOne>
      {/* <DocTitleOne></DocTitleOne> */}
      {/* <DocTitleTwo></DocTitleTwo> */}
    </div>
  );
}

export default App;
