import React from 'react';
import logo from './logo.svg';
import Main from './components/Main';
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
        numOfClicks: 0,
        series: []
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
    // const series = ["Vikings", "Game of Thrones"];

    // setTimeout(() => {
    //   this.setState({ series: series });
    // }, 2000);
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then(response => response.json())
      .then(json => this.setState({ series: json }))
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
      <p>
        Number of series: {this.state.series.length}
      </p>
      <Main />
    </div>
  );
  }
}
export default App;
