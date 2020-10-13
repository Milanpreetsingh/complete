import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import Home from './home.js';
import Signup from './signup.js';
import Home1 from './home1.js';
import Nomatch from './nomatch.js';
import Indian from './indian.js';
import Italian from './italian.js';
import Recipes from './recipes.js';
import Firebase_Recipes from './firebase_recipes';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/signup' component = {Signup}/>
        <Route path = '/home1'  component = {Home1}/>
        <Route path = '/indian' component = {Indian}/>
        <Route path = '/italian' component = {Italian}/>
        <Route path = '/recipes' component = {Recipes}/>
        <Route path = '/firebase_recipes' component = {Firebase_Recipes}/>
        <Route component = {Nomatch}/>
      </Switch>
    </div>
  );
}

export default App;
