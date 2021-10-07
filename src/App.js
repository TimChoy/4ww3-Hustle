import Navigation from './Components/Navigation.js';
import { Switch, Route } from 'react-router-dom';
import Hustle from './Components/Hustle';
import Search from './Components/Search';
import Contribute from './Components/Contribute';
import Login from './Components/Login';
import Item from './Components/Item';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Hustle} />
        <Route path='/search' component={Search} />
        <Route path='/contribute' component={Contribute} />
        <Route path='/login' component={Login} />
        <Route path='/item' component={Item} />
      </Switch>
    </div>
  );
}

export default App;
