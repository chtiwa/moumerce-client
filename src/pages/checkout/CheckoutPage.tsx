import { useState, useEffect } from "react"
import "./CheckoutPage.scss"
import TotalBox from "../../components/TotalBox/TotalBox"
import { openPopup } from "../../features/popupSlice"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { useNavigate } from "react-router-dom"
import { useCreateCartMutation } from "../../services/auth"
import Loader from "../../components/loader/Loader"

interface Form {
  firstName: string
  lastName: string
  state: string
  address: string
  phone: string
}

const CheckoutPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, userId } = useAppSelector((state) => state.auth)
  const { products, total } = useAppSelector((state) => state.cart)
  const [isCartCreated, setIsCartCreated] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    state: "",
    address: "",
    phone: ""
  })
  const [formBlur, setFormBlur] = useState({
    firstName: false,
    lastName: false,
    // state: false,
    address: false,
    phone: false
  })
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    // state: "",
    address: "",
    phone: ""
  })
  const [createCart, createCartResult] = useCreateCartMutation()

  useEffect(() => {
    if (!isLoggedIn) navigate("/authentication")
  }, [isLoggedIn])

  // create cart and order and then navigate to /user
  const handleClick = () => {
    if (!isValid()) {
      dispatch(
        openPopup({
          message: "The form must be filled before ordering!",
          success: false
        })
      )
      return
    }
    // create a cart then an order wich has the cart _id
    createCart({ products, total, user: userId })
    localStorage.removeItem("products")
    setIsCartCreated(true)
    // when the createCart request is done then create an order using the useEffect
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value }
      setErrors(() => validate(updatedForm))
      return updatedForm
    })
  }

  const validate = (form: Form) => {
    let errors: any = {
      firstName: "",
      lastName: "",
      address: "",
      phone: ""
      // state: ""
    }
    if (form.firstName.length === 0) {
      errors.firstName = "First name is required!"
    }
    if (form.firstName.length > 0 && form.firstName.length < 3) {
      errors.firstName = "First name must be at least 2 characters!"
    }

    if (form.lastName.length === 0) {
      errors.lastName = "Last name is required!"
    }
    if (form.lastName.length > 0 && form.lastName.length < 3) {
      errors.lastName = "Last name must be at least 3 characters."
    }

    if (form.address.length === 0) {
      errors.address = "Address is required!"
    }

    // if (form.state.length === 0) {
    //   errors.state = "State is required!"
    // }

    if (form.phone.length === 0) {
      errors.phone = "Phone number is required!"
    }
    if (form.phone.length > 0 && form.phone.length !== 10) {
      errors.phone = "Phone number must be 10 characters!"
    }

    return errors
  }

  const isValid = () => {
    return (
      errors.firstName.length === 0 &&
      errors.lastName.length === 0 &&
      errors.address.length === 0 &&
      // errors.state.length === 0 &&
      errors.phone.length === 0 &&
      form.firstName.length !== 0 &&
      form.lastName.length !== 0 &&
      form.address.length !== 0 &&
      // form.state.length !== 0 &&
      form.phone.length !== 0
    )
  }

  // when the createCart or the createOrder is loading
  // show the loading spinner
  if (createCartResult.isLoading && !createCartResult.isError) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="wrapper">
        <h3>Checkout</h3>
        <form>
          <div className="form-control">
            <label htmlFor="firstName">First name</label>
            <div className="inner">
              <input
                type="text"
                name="firstName"
                value={form.firstName || ""}
                onChange={handleChange}
                onBlur={() => setFormBlur({ ...formBlur, firstName: true })}
              />
              {errors.firstName.length > 0 && formBlur.firstName && (
                <span className="error-span">{errors.firstName} </span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last name</label>
            <div className="inner">
              <input
                type="text"
                name="lastName"
                value={form.lastName || ""}
                onChange={handleChange}
                onBlur={() => setFormBlur({ ...formBlur, lastName: true })}
              />
              {errors.lastName.length > 0 && formBlur.lastName && (
                <span className="error-span">{errors.lastName} </span>
              )}
            </div>
          </div>
          {/* <div className="form-control">
            <label htmlFor="state">State </label>
            <div className="select-wrapper">
              <select name="state" onChange={handleChange}>
                <option value="Adrar">Adrar</option>
                <option value="Chlef">Chlef</option>
                <option value="Laghouat">Laghouat</option>
                <option value="Oum El Bouaghi">Oum El Bouaghi</option>
                <option value="Batna">Batna</option>
                <option value="Béjaïa">Béjaïa</option>
                <option value="Biskra">Biskra</option>
                <option value="Béchar">Béchar</option>
                <option value="Blida">Blida</option>
                <option value="Bouira">Bouira</option>
                <option value="Tamanrasset">Tamanrasset</option>
                <option value="Tébessa">Tébessa</option>
                <option value="Tlemcen">Tlemcen</option>
                <option value="Tiaret">Tiaret</option>
                <option value="Tizi Ouzou">Tizi Ouzou</option>
                <option value="Alger">Alger</option>
                <option value="Djelfa">Djelfa</option>
                <option value="Jijel">Jijel</option>
                <option value="Sétif">Sétif</option>
                <option value="Saïda">Saïda</option>
                <option value="Skikda">Skikda</option>
                <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
                <option value="Annaba">Annaba</option>
                <option value="Guelma">Guelma</option>
                <option value="Constantine">Constantine</option>
                <option value="Médéa">Médéa</option>
                <option value="Mostaganem">Mostaganem</option>
                <option value="M'Sila">M'Sila</option>
                <option value="Mascara">Mascara</option>
                <option value="Ouargla">Ouargla</option>
                <option value="Oran">Oran</option>
                <option value="El Bayadh">El Bayadh</option>
                <option value="Illizi">Illizi</option>
                <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
                <option value="Boumerdès">Boumerdès</option>
                <option value="El Tarf">El Tarf</option>
                <option value="Tindouf">Tindouf</option>
                <option value="Tissemsilt">Tissemsilt</option>
                <option value="El Oued">El Oued</option>
                <option value="Khenchela">Khenchela</option>
                <option value="Souk Ahras">Souk Ahras</option>
                <option value="Tipaza">Tipaza</option>
                <option value="Mila">Mila</option>
                <option value="Aïn Defla">Aïn Defla</option>
                <option value="Naâma">Naâma</option>
                <option value="Aïn Témouchent">Aïn Témouchent</option>
                <option value="Ghardaïa">Ghardaïa</option>
                <option value="Relizane">Relizane</option>
                <option value="El M'ghair">El M'ghair</option>
                <option value="El Meniaa">El Meniaa</option>
                <option value="Tamanrasset">Tamanrasset</option>
                <option value="El Tarf">El Tarf</option>
                <option value="Tindouf">Tindouf</option>
              </select>
            </div>
          </div> */}
          <div className="form-control">
            <label htmlFor="address">Address </label>
            <div className="inner">
              <input
                type="text"
                name="address"
                value={form.address || ""}
                onChange={handleChange}
                onBlur={() => setFormBlur({ ...formBlur, address: true })}
              />
              {errors.address.length > 0 && formBlur.address && (
                <span className="error-span">{errors.address} </span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone </label>
            <div className="inner">
              <input
                type="tel"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
                onBlur={() => setFormBlur({ ...formBlur, phone: true })}
              />
              {errors.phone.length > 0 && formBlur.phone && (
                <span className="error-span">{errors.phone} </span>
              )}
            </div>
          </div>
          {/* <button type='submit'>Submit your order</button> */}
        </form>
      </div>
      <TotalBox
        state={form.state}
        page="checkout"
        handleClick={handleClick}
        isCartCreated={isCartCreated}
        createCartResult={createCartResult}
        userId={userId}
      />
    </div>
  )
}

export default CheckoutPage
