function EventsTable() {

  const events = [

    {
      id: 1,
      name: 'Tech Symposium',
      date: '20 June 2026',
      venue: 'Chennai'
    },

    {
      id: 2,
      name: 'Music Fest',
      date: '15 July 2026',
      venue: 'Coimbatore'
    },

    {
      id: 3,
      name: 'Workshop Expo',
      date: '10 August 2026',
      venue: 'Bangalore'
    }

  ]

  return (

    <section className="table-section">

      <h2>Upcoming Event Schedule</h2>

      <table>

        <thead>

          <tr>

            <th>Event</th>

            <th>Date</th>

            <th>Venue</th>

          </tr>

        </thead>

        <tbody>

          {

            events.map((event) => (

              <tr key={event.id}>

                <td>{event.name}</td>

                <td>{event.date}</td>

                <td>{event.venue}</td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </section>
  )
}

export default EventsTable