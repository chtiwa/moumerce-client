import { useState, useEffect } from "react"
import './Popup.scss'
import { AiOutlineInfoCircle } from "react-icons/ai"

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const message = "Item added to wishlist"
  const success = true

  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen(isOpen => !isOpen)
    }, 10000)
    return () => clearInterval(timer)
  }, [isOpen])

  return (
    <div className={`${isOpen ? 'show-popup' : 'hide-popup'} ${success ? 'success' : 'error'} `}>
      <span><AiOutlineInfoCircle /></span>
      <span>{message}</span>
    </div>
  )
}

export default Popup