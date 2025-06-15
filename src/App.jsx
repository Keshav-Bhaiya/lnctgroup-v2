import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import "./App.css"
import LNCTHero from "./components/LNCTHero"
import LNCTAbout from "./components/LNCTAbout"
import CampusShowcase from "./components/CampusShowcase"
import PlacementsOverview from "./components/PlacementsOverview"
import StartupsInnovationLabs from "./components/StartupsInnovationLabs"
import LNCTSections from "./components/LNCTSections"
import ContactCampusLocations from "./components/ContactCampusLocations"
import Footer from "./components/Footer"
import InstitutionsPage from "../src/components/pages/InstitutionsPage "
import ProgramsPage from "../src/components/pages/ProgramsPage"
import video from "./assets/video.mp4"
import ScrollToTop from "./ScrollToTop"

const HomePage = () => (
  <>
    <LNCTHero videoSrc={video} />
    <LNCTAbout />
    <CampusShowcase />
    <PlacementsOverview />
    <StartupsInnovationLabs />
    <LNCTSections />
    <ContactCampusLocations />
    <Footer />
  </>
)

function App() {
  return (
    <div className="min-h-screen ">
      <Nav />
      <ScrollToTop />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campuses" element={<InstitutionsPage />} />
          <Route path="/departments" element={<ProgramsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
