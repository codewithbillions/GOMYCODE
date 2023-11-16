import {Component} from 'react';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // name: "kehinde",
      // company: 'Gomycode'
      name: {firstName: "kehinde", lastName: "ogunyade"},
      company: "GOMYCODE",
    };
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Hi {this.state.name.firstName}  {this.state.name.lastName}, I work at {this.state.company}
        </p>
       <button onClick={() => {this.setState({name: {firstName: 'billions', lastName:"ajeti"} })}}>
       Change Name</button>
      </header>
    </div>
  );
  }
  
}

export default App;


class App extends Component {
  constructor() {
    super();

  //   this.state = {
  //     monster1: {
  //       name: 'Linda',
  //     },
  //     monster2: {
  //       name : "Frank",
  //     },
  //     monster3: {
  //       name: 'Jacky',
  //     }
  // }

 render() {
    return (
      <div className="App">
        <h1>{this.state.monster1.name}</h1>
    <h1>{this.state.monster2.name}</h1>
    <h1>{this.state.monster3.name}</h1>
      </div>
   );
  }
}
