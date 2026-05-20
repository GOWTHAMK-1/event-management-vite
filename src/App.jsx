import { useState, useEffect } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import RegistrationForm from './components/RegistrationForm'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import Stats from './components/Stats'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [events, setEvents] = useState([])

  const [eventName, setEventName] = useState('')

  const [venue, setVenue] = useState('')

  const [error, setError] = useState('')

  // useEffect Hook
  useEffect(() => {

    document.title = `Events (${events.length})`

  }, [events])

  // Add Event
  const addEvent = (e) => {

    e.preventDefault()

    if(eventName.trim() === '' || venue.trim() === '') {

      setError('Please fill all fields')

      return
    }

    const newEvent = {

      id: Date.now(),

      name: eventName,

      venue: venue
    }

    setEvents([...events, newEvent])

    setEventName('')

    setVenue('')

    setError('')
  }

  // Delete Event
  const deleteEvent = (id) => {

    const updatedEvents = events.filter(
      (event) => event.id !== id
    )

    setEvents(updatedEvents)
  }

  return (

    <div>

      <Header />

      <Hero />

      <Features />

      <Stats total={events.length} />

      <RegistrationForm />

      <EventForm
        eventName={eventName}
        setEventName={setEventName}
        venue={venue}
        setVenue={setVenue}
        addEvent={addEvent}
        error={error}
      />

      <EventList
        events={events}
        deleteEvent={deleteEvent}
      />

      <VideoSection />

      <Footer />

    </div>
  )
}

export default App