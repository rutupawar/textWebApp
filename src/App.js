// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';

// function App1() {
//   return (
//     <>
//     <p> When such case arise, to have multiple tag segement to return, just wrap in same tag</p>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           >
//           Learn React
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

/*

*/

function App() {
    return (
    <>
      <Navbar Title="Title" Home="Home" About="about me"/>
      <div className="container my-3">
        {/* <TextForms Title="Enter text here"/> */}
      <About/>
      </div>
    </>
  );
}

// Different elements returned as changed below, App or App1
export default App;
