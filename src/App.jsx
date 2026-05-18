import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import RegistrationForm from './components/RegistrationForm'
import EventsTable from './components/EventsTable'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <RegistrationForm />
      <EventsTable />
      <VideoSection />
      <Footer />
    </>
  )
}

export default App