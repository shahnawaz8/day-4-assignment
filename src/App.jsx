import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import {Stopwatch} from './Stopwatch'
import {Groceries} from './Grocery';

function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
      {/* { show ? <Stopwatch/> : ""}
      <button
          onClick={()=>{
            setShow(show?false:true);
          }}>
        {show?"Hide watch":"show watch"}
      </button> */}
      
      <Groceries />



    </div>
  );
}

export default App;
