import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import { Switch, Route } from 'react-router-dom';
import Hustle from './Components/Hustle';
import Search from './Components/Search';
import Contribute from './Components/Contribute';
import Login from './Components/Login';
import Item from './Components/Item';
import FixedFooter from './Components/FixedFooter.js';
import ScrollToTop from './Components/ScrollToTop.js';

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
      <Switch>
        <Route exact path='/' component={FixedFooter} />
        <Route path='/login' component={FixedFooter} />
        <Route path='/contribute' component={FixedFooter} />
        <Route path='/search' component={Footer} />
        <Route path='/item' component={Footer} />
      </Switch>
    </div>
  );
}

export default App;
