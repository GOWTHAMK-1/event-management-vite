import {
  FaTicketAlt,
  FaUsers,
  FaQrcode
} from 'react-icons/fa'

function Features() {

  return (

    <section className="features">

      <h2>Platform Features</h2>

      <div className="feature-box">

        <div className="card">

          <FaTicketAlt className="icon" />

          <h3>Online Registration</h3>

          <p>
            Register for events instantly from anywhere.
          </p>

        </div>

        <div className="card">

          <FaQrcode className="icon" />

          <h3>QR Code Tickets</h3>

          <p>
            Secure digital tickets with QR verification.
          </p>

        </div>

        <div className="card">

          <FaUsers className="icon" />

          <h3>Participant Management</h3>

          <p>
            Easily manage attendees and registrations.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Features