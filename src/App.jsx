import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SupportNetworkActivation from './pages/SupportNetworkActivation';
import VoiceFirstRelationshipManagement from './pages/VoiceFirstRelationshipManagement';
import LinkedInContactsOrganizer from './pages/LinkedInContactsOrganizer';
import FreeBusinessCardViber from './pages/FreeBusinessCardViber';
import UseCases from './pages/UseCases';
import HelpCommunity from './pages/HelpCommunity';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support-network-activation" element={<SupportNetworkActivation />} />
        <Route path="/voice-first-relationship-management" element={<VoiceFirstRelationshipManagement />} />
        <Route path="/linkedin-contacts-organizer" element={<LinkedInContactsOrganizer />} />
        <Route path="/free-business-card-viber" element={<FreeBusinessCardViber />} />
        <Route path="/reconnect-with-an-old-friend" element={<UseCases />} />
        <Route path="/help-community" element={<HelpCommunity />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
