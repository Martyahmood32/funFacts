import React, { Component } from 'react';
import './App.css';
import './styleSheet'
import Home from './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import FactOne from './components/FactOne'
import FactTwo from './components/FactTwo';
import FactThree from './components/FactThree';

// function App() {
//   return (
// <div className="App">
// <h1>Marvel Facts</h1>
//   <header className="App-header">
//    <img src="https://i.etsystatic.com/29986505/r/il/c7f335/3523374911/il_570xN.3523374911_6oay.jpg" alt="" />
    
//     <a
//       className="App-link"
//       href=''
//     >
//       Learn More
//     </a>
//   </header>
// </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/fact-one' component={FactOne}/>
        <Route path='/fact-two' component={FactTwo}/>
        <Route path='/fact-three' component={FactThree}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
