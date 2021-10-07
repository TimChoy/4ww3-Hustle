import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import { Switch, Route } from 'react-router-dom';
import Hustle from './Components/Hustle';
import Search from './Components/Search';
import Contribute from './Components/Contribute';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Hustle} />
        <Route path='/search' component={Search} />
        <Route path='/contribute' component={Contribute} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
