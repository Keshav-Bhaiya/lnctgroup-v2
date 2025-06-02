import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import InstitutionsPage from '../src/components/pages/InstitutionsPage ' // Import your institutions page

// Home component containing all your existing content
const HomePage = () => {
  return (
    <>
      <LNCTHero />
      <LNCTAbout />
      <CampusShowcase />
      <PlacementsOverview />
      <StartupsInnovationLabs />
      <LNCTSections />
      <ContactCampusLocations />
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='w-screen min-h-screen'>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/institutions" element={<InstitutionsPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App