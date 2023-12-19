import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import React from 'react';

export const UserContext = React.createContext()
export const CourseName = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Arpit Jain'}>
        <CourseName.Provider value={'PG-DAC'}>
          <ComponentC></ComponentC>
        </CourseName.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
