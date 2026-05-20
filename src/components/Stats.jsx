function Stats({ total }) {

  return (

    <section className="stats">

      <div className="stat-box">

        <h2>{total}</h2>

        <p>Total Events</p>

      </div>

      <div className="stat-box">

        <h2>500+</h2>

        <p>Participants</p>

      </div>

      <div className="stat-box">

        <h2>20+</h2>

        <p>Organizers</p>

      </div>

    </section>
  )
}

export default Stats