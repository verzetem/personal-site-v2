import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContent from './components/HomeContent'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import Footer from './components/Footer'

class App extends Component {

componentDidMount() {
  
}

  render() {

  const Index = () => <HomeContent />;
  const About = () => <AboutMe />;
  const Skills = () => <MySkills />;


    return (
      
      <Router>
        <div className='App'>

        <nav className='nav-left'>
          <Link to='/'><Button color='info'>Home</Button></Link>
          <Link to='/about/'><Button color='info'>About</Button></Link>
          <Link to='/skills/'><Button color='info'>Skills</Button></Link>
        </nav>
        <hr />

        <Route path='/' exact component={Index} />
        <Route path='/about/' component={About} />
        <Route path='/skills/' component={Skills} />

          <div className='footer'>
            <div id='button'></div>
            <div id='container'>
              <div id='cont'>
                <div className='footer_center'>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </Router>

    );
  }
}

export default App;
