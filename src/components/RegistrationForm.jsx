import { useState } from 'react'

function RegistrationForm() {

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    if(name === '' || email === '') {

      setMessage('Please fill all fields')

      return
    }

    setMessage('Registration Successful')

    setName('')

    setEmail('')
  }

  return (

    <section className="registration-section">

      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">

          Register

        </button>

      </form>

      <p className="success-message">
        {message}
      </p>

    </section>
  )
}

export default RegistrationForm