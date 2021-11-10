import { Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Hustle from './Components/Hustle';
import Search from './Components/Search';
import Contribute from './Components/Contribute';
import Login from './Components/Login';
import Item from './Components/Item';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Hustle} />
          <Route path='/search' component={Search} />
          <Route path='/contribute' component={Contribute} />
          <Route path='/login' component={Login} />
          <Route path='/item' component={Item} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
