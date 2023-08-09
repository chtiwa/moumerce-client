import { AiOutlineMail } from 'react-icons/ai'
import './Newsletter.scss'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="left">
        <h3>Sign up for the newsletter</h3>
      </div>
      <div className="right">
        <div className="right-wrapper">
          <input type="email" placeholder='Your email address' />
          <AiOutlineMail />
        </div>
        <p>You may unsubscribe at any moment. Find more about this in the legal notice.</p>
      </div>
    </div>
  )
}

export default Newsletter