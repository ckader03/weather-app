import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';


function App() {
  
  return (
    <div className="App">
      <PersonInput />

      <PersonList />
    </div>
  );
}


export default App;
