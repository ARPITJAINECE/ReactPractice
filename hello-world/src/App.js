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
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import styles from './appStyles.module.css';
import './appStyles.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import pureComponent from './components/PureComponent';
import ParentComp from './components/ParentComp';
import RegularComponent from './components/RegularComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">

      <FocusInput></FocusInput>
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RegularComponent></RegularComponent> */}
      {/* <PureComponent></PureComponent> */}
      {/* <Table></Table> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline></Inline> */}
      {/* <StyleSheets primary={true}></StyleSheets> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <EventBind></EventBind> */}
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
