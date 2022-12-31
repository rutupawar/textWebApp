import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TextForms from './components/TextForms';

function App() {

  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: 'white',
    border: '1px solid white'
});

    return (
    <>
      <Navbar Title="Title" Home="Home" About="about me"/>
      <div className="container my-3" mode={mode}>
      <TextForms Title="Enter text here"/>
      {/* <About/> */}
      </div>
    </>
  );
}

// Different elements returned as changed below, App or App1
export default App;
