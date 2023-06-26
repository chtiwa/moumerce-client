import { Link } from "react-router-dom"
import "./ForgotPassword.scss"
import { useState } from "react"
import { AiOutlineLeft } from "react-icons/ai"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="reset-password">
      <div className="wrapper">
        <div className="heading">
          Reset your password
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <p>Please enter the email address you used in registering, a temporary email will ben sent to reset your password</p>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" value={email || ''} onChange={handleChange} />
            <button type="submit">Send reset link</button>
          </div>
          <hr />
          <Link to='/authentication'>
            <AiOutlineLeft />
            <span>Back to login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword