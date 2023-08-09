import { useEffect } from "react"
import './Popup.scss'
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { closePopup } from "../../features/popupSlice"

const Popup = () => {
  const { message, success, isPopupOpen } = useAppSelector((state) => state.popup)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(closePopup())
    }, 4000)
    return () => clearInterval(timer)
  }, [isPopupOpen])

  return (
    <div className={`${isPopupOpen ? 'show-popup' : 'hide-popup'} ${success ? 'success' : 'error'} `}>
      <span><AiOutlineInfoCircle /></span>
      <span>{message}</span>
    </div>
  )
}

export default Popup