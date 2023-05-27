import Footer from 'components/Footer';
import Home from 'components/Home';
import About from 'components/About';
import Testimonials from 'components/Testimonials';
import { motion } from 'framer-motion';
import React from 'react';
import Gallery from 'components/Gallery';
import VideoGallery from 'components/VideoGallery';
import Trial from 'components/Trial';
function App() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <Home />
      <About/>
      <Gallery/>
      <VideoGallery/>
      
      <Testimonials />
      <Trial/>
      <Footer />
    </motion.div>
  )
}

export default App