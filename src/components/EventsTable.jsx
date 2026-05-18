function EventsTable() {
  return (
    <section className="table-section">

      <h2>Upcoming Events</h2>

      <table>

        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Venue</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Tech Symposium</td>
            <td>20 June 2026</td>
            <td>Chennai</td>
          </tr>

          <tr>
            <td>Music Fest</td>
            <td>15 July 2026</td>
            <td>Coimbatore</td>
          </tr>

        </tbody>

      </table>

    </section>
  )
}

export default EventsTable