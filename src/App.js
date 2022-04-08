import React from 'react'
import { Route, Routes} from 'react-router';
import { Divider } from '@material-ui/core';

import './App.css';
import ResponsiveAppBar from "./components/Header/Nav";
import Home from './components/Header/Home';
import Products from './components/Header/Products';
import Pricing from './components/Header/Pricing';
import Location from './components/Header/Location';
import Dashboard from './components/UserSettings/Dashboard';
import Profile from './components/UserSettings/Profile';
import Signup from './components/UserSettings/Signup';
import Searchbar from './components/Header/Searchbar';

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
          <Divider />
          <Divider />
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Location" element={<Location />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
