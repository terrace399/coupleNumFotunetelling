import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Prime from './components/prime.js'
import InputForm from './components/sync.js'
class App extends React.Component {
  render(){
    return (
      <div>
        {

        //<Header />
        // <Main />
        // <Footer />
        // <Todo />
        // <h2>アプリ２</h2>
        }
        <Prime />
        <InputForm />
      </div>
    )
  }
}


export default App;


// function App() {
//   return (
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
//         >
//           Reactへようこそ
//         </a>
//       </header>
//     </div>
//   );
// }
