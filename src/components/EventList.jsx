import EventItem from './EventItem'

function EventList({ events, deleteEvent }) {

  return (

    <section className="event-list">

      <h2>Upcoming Events</h2>

      {

        events.length === 0 ? (

          <p className="empty">
            No Events Added
          </p>

        ) : (

          events.map((event) => (

            <EventItem
              key={event.id}
              event={event}
              deleteEvent={deleteEvent}
            />

          ))
        )
      }

    </section>
  )
}

export default EventList