import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Services from './pages/Services';
import Home from './pages/Home';

export default function App() {
    return (
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    );
}