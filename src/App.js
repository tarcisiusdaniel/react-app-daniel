import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        numOfClicks: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(){
      this.setState({
        numOfClicks: this.state.numOfClicks + 1
      });
  }

  handleDecrement(){
      this.setState({
        numOfClicks: this.state.numOfClicks - 1
      });
  }

  componentDidMount(){

  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, my name is <br/>{this.props.name}</h1>
        <div id = "changeNumber">
          <button onClick = {this.handleIncrement}>Increment</button>
          <button onClick = {this.handleDecrement}>Decrement</button>
        </div>
        <p>Number of the button has been clicked: {this.state.numOfClicks}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
  }
}
export default App;
