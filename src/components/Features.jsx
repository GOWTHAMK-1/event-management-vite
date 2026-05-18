import { FaTicketAlt, FaUsers, FaQrcode } from 'react-icons/fa'

function Features() {
  return (
    <section className="features">

      <h2>Platform Features</h2>

      <div className="feature-box">

        <div className="card">
          <FaTicketAlt className="icon" />
          <h3>Online Registration</h3>
          <p>Users can register for events online.</p>
        </div>

        <div className="card">
          <FaQrcode className="icon" />
          <h3>QR Tickets</h3>
          <p>Secure QR code tickets for event entry.</p>
        </div>

        <div className="card">
          <FaUsers className="icon" />
          <h3>Participant Management</h3>
          <p>Organizers can manage participants easily.</p>
        </div>

      </div>

    </section>
  )
}

export default Features