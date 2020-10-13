import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composant/Header'
import Liste from './composant/Liste'
import {Provider} from './context'
import Input from './composant/Input'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Apropos from './composant/Apropos'
import Erreur from './composant/Erreur'
class App extends Component {
  render(){
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="Container">
              <Switch>
              <Route exact path="/input" component={Input}/>
              <Route exact path="/liste" component={Liste}/>
              <Route exact path="/" component={Liste}/>
              <Route exact path="/apropos" component={Apropos}/>
              <Route component={Erreur}/>
              </Switch>
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
  
}

export default App;
