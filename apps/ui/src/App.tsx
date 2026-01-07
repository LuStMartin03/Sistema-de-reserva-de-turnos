import { Routes, Route } from 'react-router-dom';
import Register from './pages/AuthPage';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import Home from './pages/Home';

export default function App() {
    return (
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    );
}