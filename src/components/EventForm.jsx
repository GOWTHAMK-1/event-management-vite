function EventForm({

  eventName,
  setEventName,
  venue,
  setVenue,
  addEvent,
  error

}) {

  return (

    <section className="form-section">

      <h2>Add New Event</h2>

      <form onSubmit={addEvent}>

        <input
          type="text"
          placeholder="Enter Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />

        <button type="submit">

          Add Event

        </button>

      </form>

      {error &&

        <p className="error">
          {error}
        </p>

      }

    </section>
  )
}

export default EventForm