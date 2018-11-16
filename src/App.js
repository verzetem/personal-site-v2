import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContent from './components/HomeContent'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

class App extends Component {

componentDidMount() {
  
}

  render() {

  const Index = () => <HomeContent />;
  const About = () => <AboutMe />;
  const Skills = () => <h2>Skills</h2>;


    return (
      
      <Router>
        <div className="App">

        <nav>
          <Link to="/"><Button color="info">Home</Button></Link>
          <Link to="/about/"><Button color="info">About</Button></Link>
          <Link to="/skills/"><Button color="info">Skills</Button></Link>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/skills/" component={Skills} />

          
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
