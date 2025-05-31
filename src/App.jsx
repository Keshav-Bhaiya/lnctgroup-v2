import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Nav from './components/nav';
import './App.css'
import LNCTHero from './components/LNCTHero';
import LNCTAbout from './components/LNCTAbout';
import CampusShowcase from './components/CampusShowcase';
import PlacementsOverview from './components/PlacementsOverview';
import StartupsInnovationLabs from './components/StartupsInnovationLabs';
import LNCTSections from './components/LNCTSections';
import ContactCampusLocations from './components/ContactCampusLocations';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
       <div className='w-screen h-screen'>
        <Nav/>
        <LNCTHero />
        <LNCTAbout />
        <CampusShowcase />
        <PlacementsOverview />
        <StartupsInnovationLabs />
        <LNCTSections />
        <ContactCampusLocations />
        <Footer />

       </div>
  )
}

export default App
