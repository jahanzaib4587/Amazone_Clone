

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React, { useEffect } from "react";
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from './Data_Layer/StateProvider';
import { auth } from './Firebase/firebase';
function App() {
  const [ dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);


  return (
    <>
          <Router >
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path='/checkout'>
            <Header></Header>
           <Checkout></Checkout>
          </Route>
           <Route exact path='/signin'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
  </>
  );
}

export default App;
