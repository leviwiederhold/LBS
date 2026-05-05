import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import ServicesBooking from './pages/ServicesBooking';
import PrePostCare from './pages/PrePostCare';
import GiftCard from './pages/GiftCard';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ClientPortal from './pages/ClientPortal';
import Admin from './pages/Admin';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesBooking />} />
        <Route path="/care" element={<PrePostCare />} />
        <Route path="/gift-card" element={<GiftCard />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<ProtectedRoute><ClientPortal /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute requireAdmin><Admin /></ProtectedRoute>} />
      </Routes>
      <LinkCta />
      <Footer />
    </>
  );
}

function LinkCta() {
  return <a className="mobile-sticky-cta" href="/services">Book Online</a>;
}
