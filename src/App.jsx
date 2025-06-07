import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import './App.css'
import LNCTHero from './components/LNCTHero'
import LNCTAbout from './components/LNCTAbout'
import CampusShowcase from './components/CampusShowcase'
import PlacementsOverview from './components/PlacementsOverview'
import StartupsInnovationLabs from './components/StartupsInnovationLabs'
import LNCTSections from './components/LNCTSections'
import ContactCampusLocations from './components/ContactCampusLocations'
import Footer from './components/Footer'
import InstitutionsPage from '../src/components/pages/InstitutionsPage '

const HomePage = () => (
  <>
    <LNCTHero />
    <LNCTAbout />
    <CampusShowcase />
    <PlacementsOverview />
    <StartupsInnovationLabs />
    <LNCTSections />
    <ContactCampusLocations />
    <Footer />
  </>
);

function App() {
  return (
    <div className="w-screen ml-[-150px] min-h-screen overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campuses" element={<InstitutionsPage />} />
      </Routes>
    </div>
  )
}

export default App