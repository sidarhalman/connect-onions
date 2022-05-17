import React, { useState } from 'react'
import { Route, Routes} from 'react-router';
import { Divider } from '@material-ui/core';

import './App.css';
import ResponsiveAppBar from "./components/Header/Nav";
import Home from './components/Header/Home';
import Products from './components/Header/Products';
import Users from './components/Header/Users';
import Location from './components/Header/Location';
import Dashboard from './components/UserSettings/Dashboard';
import Profile from './components/UserSettings/Profile';
import Signup from './components/UserSettings/Signup';
import Searchbar from './components/Header/Searchbar';
import Questions from './components/Header/Questions';

function App() {
  
  const [ showSearchbar, setSeachbar] = useState(false);
  
  return (
    <div className="App">
      <h1>We Start!!</h1>
    </div>
  );
}

export default App;
