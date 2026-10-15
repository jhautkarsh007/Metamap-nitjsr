import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ObjectivesAreas from './components/ObjectivesAreas';
import KeyFeatures from './components/KeyFeatures';
import ScheduleSection from './components/ScheduleSection';
import SpeakersSection from './components/SpeakersSection';
import CommitteeSection from './components/CommitteeSection';
import RegistrationFees from './components/RegistrationFees';
import EligibilityCertification from './components/EligibilityCertification';
import VenueContact from './components/VenueContact';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import BrochureModal from './components/BrochureModal';
import './App.css';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenRegister={() => setIsRegisterOpen(true)} 
        onOpenBrochure={() => setIsBrochureOpen(true)} 
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onOpenRegister={() => setIsRegisterOpen(true)} 
          onOpenBrochure={() => setIsBrochureOpen(true)} 
        />

        {/* About Workshop, Institute & Department Section */}
        <AboutSection 
          onOpenRegister={() => setIsRegisterOpen(true)} 
        />

        {/* Core Technical Objectives & Broad Areas */}
        <ObjectivesAreas />

        {/* 6 Key Features */}
        <KeyFeatures 
          onOpenRegister={() => setIsRegisterOpen(true)} 
        />

        {/* 5-Day Detailed Schedule */}
        {/* <ScheduleSection 
          onOpenBrochure={() => setIsBrochureOpen(true)} 
        /> */}

        {/* Keynote & Resource Speakers */}
        <SpeakersSection />

        {/* Organizing Leadership & Patrons */}
        <CommitteeSection />

        {/* Eligibility & Certification */}
        <EligibilityCertification />

        {/* Registration Fees & Bank Details */}
        <RegistrationFees 
          onOpenRegister={() => setIsRegisterOpen(true)} 
        />

        {/* Venue, Contact & Travel Info */}
        <VenueContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

      <BrochureModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />
    </div>
  );
}

export default App;
