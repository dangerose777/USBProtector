import "./App.css";
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Settings from './pages/Settings'

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;