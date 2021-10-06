import './App.css';
import Navigation from './Components/Navigation.js';
import { Switch, Route } from 'react-router-dom';
import Hustle from './Components/Hustle';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
      <Route exact path='/' component={Hustle} />
      <Route path='/search' component={Search} />
      </Switch>
    </div>
  );
}

export default App;
