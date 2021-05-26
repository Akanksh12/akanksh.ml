import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Projects from './components/projectsComponent'
import Home from './components/homeComponent'
import Rpg from './components/randomPasswordGeneratorComponent'
import Ped from './components/pedComponent'
import Chill from './components/chilldayComponent';
import Inputtest from './components/keyboardtestComponent';
import Birthday from './components/birthdayCompnent';
import Notfound from './components/error404Component'

function App() {
  return (
    <Router basename="my-site">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/projects/random-password-generator">
          <Rpg />
        </Route>
        <Route exact path="/projects/ped">
          <Ped />
        </Route>
        <Route exact path="/chill">
          <Chill />
        </Route>
        <Route exact path="/keyboard">
          <Inputtest />
        </Route>
        <Route exact path="/birthday">
          <Birthday />
        </Route>
        <Route path="" component={Notfound}/>
      </Switch>
    </Router>
    
  );
}

export default App;
