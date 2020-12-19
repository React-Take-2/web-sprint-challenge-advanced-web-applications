import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'
import {axiosWithAuth} from './utils/axiosWithAuth'

import "./styles.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
      
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}

          <Route path="/login" render={(props)=>{
            return (<Login {...props} setLoggedIn={setLoggedIn}/>)
            }} 
          />
          <Route exact path="/" render={(props)=>{
            return (<Login {...props} setLoggedIn={setLoggedIn}/>)
            }}  
          />

          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
          <PrivateRoute path="/protected" component={BubblePage}/>
          


        </Switch>
      </div>
    </Router>
  );
}

export default App;
