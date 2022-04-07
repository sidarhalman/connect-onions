import React from 'react'
import { Route, Routes} from 'react-router';
import './App.css';
import ResponsiveAppBar from "./components/Nav";
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Dashboard from './components/UserSettings/Dashboard';
import Profile from './components/UserSettings/Profile';
import Logout from './components/UserSettings/Logout';

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Location" element={<Location />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Logout" element={<Logout />} />
          </Routes>
    </div>
  );
}

export default App;
