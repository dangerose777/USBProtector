import "./App.css";
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Settings from './pages/Settings'
import Devices from './pages/Devices'
import Scanner from './pages/Scanner'

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/devices" element={<Devices/>} />
        <Route path="/scanner" element={<Scanner/>} />
      </Routes>
    </>
  );
}

export default App;