import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

export default function App() {
    return (
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    );
}