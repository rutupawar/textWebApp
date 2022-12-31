import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TextForms from './components/TextForms';

function App() {

  const [mode, setMode] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  const togglemode = ()=>{
    console.log(12);
    if(mode.color === 'black'){
      setMode({
        color: 'white',
        backgroundColor: 'black'
      });
    }
    else{
      setMode({
        color: 'black',
        backgroundColor: 'white'
      });
    }
  }

    return (
    <>
      <Navbar Title="Title" Home="Home" About="about me" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
      <TextForms Title="Enter text here"/>
      {/* <About/> */}
      </div>
    </>
  );
}

// Different elements returned as changed below, App or App1
export default App;
