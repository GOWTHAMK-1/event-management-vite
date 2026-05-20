function EventItem({ event, deleteEvent }) {

  return (

    <div className="event-card">

      <div>

        <h3>{event.name}</h3>

        <p>{event.venue}</p>

      </div>

      <button
        className="delete-btn"
        onClick={() => deleteEvent(event.id)}
      >

        Delete

      </button>

    </div>
  )
}

export default EventItem