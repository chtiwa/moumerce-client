import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiOutlineCopyright, AiOutlineGoogle, AiOutlineMail, AiOutlineRight, AiOutlineTwitter } from 'react-icons/ai'
import './Footer.scss'
import { MdOutlineLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="section">

        <ul className="list">
          <li className="item">
            <span className="heading">Information</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Delivery</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Legal notice</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>About us</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Terms and legal conditions of use</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Confidiality policy</span>
          </li>
        </ul>

        <ul className="list">
          <li className="item">
            <span className="heading">Account</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Login</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Adresses</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Order traking</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Order history</span>
          </li>
        </ul>

        <ul className="list">
          <li className="item">
            <span className="heading">Customs</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Price drop</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Stores</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Manufacturers</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>New products</span>
          </li>
          <li className="item">
            <AiOutlineRight />
            <span>Site map</span>
          </li>
        </ul>

        <ul className="list">
          <li className="item">
            <span className="heading">Contact us</span>
          </li>
          <li className="item bold">
            <span>Company's name</span>
          </li>
          <li className="item">
            <AiFillPhone />
            <span>Company's number</span>
          </li>
          <li className="item">
            <MdOutlineLocationOn />
            <span>Company's adress</span>
          </li>
          <li className="item">
            <AiOutlineMail />
            <span>Company's email</span>
          </li>
          <li className="item">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis.</span>
          </li>
        </ul>
      </div>


      <div className="logo">
        <div className="title">
          Moumerce
        </div>
        <div className="socials">
          <AiFillFacebook className="facebook" />
          <AiFillInstagram className="instagram" />
          <AiOutlineTwitter className="twitter" />
          <AiFillLinkedin className="linkedin" />
          <AiOutlineGoogle className="google" />
        </div>
        <div className="copyright">
          <AiOutlineCopyright />
          <span>Moumerce 2023, All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer