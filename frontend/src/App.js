import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apply from './pages/Apply';
import View from './pages/View';
import Status from './pages/Status';
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"       element={<Home />}   />
        <Route path="/apply"  element={<Apply />}  />
        <Route path="/view"   element={<View />}   />
        <Route path="/update" element={<Update />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;