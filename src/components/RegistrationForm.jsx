function RegistrationForm() {
  return (
    <section className="form-section">

      <h2>Event Registration Form</h2>

      <form>

        <input
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <input
          type="number"
          placeholder="Number of Tickets"
        />

        <button type="submit">Submit</button>

      </form>

    </section>
  )
}

export default RegistrationForm