import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Hustle from './Components/Hustle';
import Search from './Components/Search';
import Contribute from './Components/Contribute';
import Login from './Components/Login';
import Register from './Components/Register';
import Item from './Components/Item';
import ScrollToTop from './Components/ScrollToTop';
import Context from './context';

function App() {
  const [data, setData] = useState();
  const [isLoggedIn, setLoggedIn] = useState();

  return (
    <Context.Provider value={{ data, setData, isLoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Navigation />
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Hustle} />
            <Route path='/search' component={Search} />
            <Route path='/contribute' component={Contribute} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/item' component={Item} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
