import React, { Component } from 'react';
import './App.css';
import { Alert, Badge } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

// logger = () => {
//   console.log('sefa')
// }

  render() {

  const Index = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;
  const Users = () => <h2>Users</h2>;

    return (
      
      <Router>
        <div className="App">
          <nav>


                <Link to="/">Home</Link>


                <Link to="/about/">About</Link>


                <Link to="/users/">Users</Link>


          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />

        </div>
      </Router>

    );
  }
}

export default App;
