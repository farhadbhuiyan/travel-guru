import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SearchHotel from './components/SearchHotel/SearchHotel';
import Hotel from './components/Hotel/Hotel';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
      <Router>
        <Header></Header>
        <Switch>
           <Route path="/home"> 
             <Home/>
           </Route>
           <Route path="/" exact> 
             <Home/>
           </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/booking/id/:id">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/hotels">
            <SearchHotel></SearchHotel>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
