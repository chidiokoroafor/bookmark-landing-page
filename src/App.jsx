import { useState } from 'react'

import MobileMenu from './components/MobileMenu'
import Header from './components/Header'
import FeaturesSection from './components/FeaturesSection'
import HeroSection from './components/HeroSection'
import Extensions from './components/Extensions'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  
  return (
    <div className="w-full min-h-screen pt-4 font-Rubik overflow-hidden">

      {openMobileMenu && <MobileMenu closeMobileMenu={setOpenMobileMenu} />}
      <Header showMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu} />

      <HeroSection />

      <FeaturesSection />

      <Extensions />

      <FAQSection />
      
      <ContactSection />

      <Footer />

    </div>
  )
}

export default App
