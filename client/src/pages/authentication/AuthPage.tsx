import { useState, useEffect } from 'react'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import './AuthPage.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../../features/authApiSlice'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { setCredentials } from '../../features/authSlice'
import { openPopup } from '../../features/popupSlice'

interface Form {
  firstName: string | null
  lastName: string | null
  email: string
  password: string
}

const AuthPage = () => {
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const [form, setForm] = useState<Form>({ firstName: '', lastName: '', email: '', password: '' })
  const [formBlur, setFormBlur] = useState({ firstName: false, lastName: false, email: false, password: false })
  const [isLogin, setIsLogin] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '' })
  const navigate = useNavigate()
  const [login, loginResult] = useLoginMutation()
  const [register, registerResult] = useRegisterMutation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isLoggedIn) navigate('/products')
  }, [isLoggedIn])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value }
      setErrors(() => validate(updatedForm))
      return updatedForm
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!isValid()) return
    if (isLogin) {
      const data = await login({ ...form }).unwrap()
      if (!loginResult.isLoading && !loginResult.isError) {
        dispatch(setCredentials({ ...data }))
        navigate('/products')
      }
    } else {
      const data = await register({ ...form }).unwrap()
      if (!registerResult.isLoading && !registerResult.isError) {
        dispatch(setCredentials({ ...data }))
        navigate('/products')
      }
    }
  }

  const validate = (form: Form) => {
    let errors: any = { firstName: "", lastName: "", email: "", password: "" }
    if (form.firstName.length === 0) {
      errors.firstName = 'First name is required!'
    }
    if (form.firstName.length > 0 && form.firstName.length < 3) {
      errors.firstName = 'First name must be at least 2 characters!'
    }

    if (form.lastName.length === 0) {
      errors.lastName = 'Last name is required!'
    }
    if (form.lastName.length > 0 && form.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.'
    }

    if (form.email.length === 0) {
      errors.email = 'Email name is required!'
    }
    if (!validateEmail(form.email)) {
      errors.email = 'Email is wrong!'
    }
    if (form.email.length > 0 && form.email.length < 10) {
      errors.email = 'Email name must be at least 10 characters!'
    }

    if (form.password.length === 0) {
      errors.password = 'Password name is required!'
    }
    if (form.password.length > 0 && form.password.length < 8) {
      errors.password = 'Password name must be at least 8 characters!'
    }
    return errors
  }

  const isValid = () => {
    if (isLogin) {
      return (
        errors.email.length === 0 && errors.password.length === 0
      )
    } else {
      return (
        errors.firstName.length === 0 && errors.lastName.length === 0 && errors.email.length === 0 && errors.password.length === 0
      )
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  return isLoggedIn ? (
    <Navigate to='/user' />
  ) : (
    <div className='auth'>
      <div className="wrapper">
        <h3>
          {isLogin ? 'Login into your account' : 'Create an account'}
        </h3>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-control">
                <label htmlFor="firstName">First name</label>
                <div className="inner">
                  <input type="text" name="firstName" value={form.firstName || ''} onChange={handleChange} onBlur={() => setFormBlur({ ...formBlur, firstName: true })} />
                  {errors.firstName.length > 0 && formBlur.firstName && (
                    <span className="error-span">{errors.firstName} </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="lastName">Last name</label>
                <div className="inner">
                  <input type="text" name="lastName" value={form.lastName || ''} onChange={handleChange} onBlur={() => setFormBlur({ ...formBlur, lastName: true })} />
                  {errors.lastName.length > 0 && formBlur.lastName && (
                    <span className="error-span">{errors.lastName} </span>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <div className="inner">
              <input type="email" name="email" value={form.email || ''} onChange={handleChange} onBlur={() => setFormBlur({ ...formBlur, email: true })} />
              {errors.email.length > 0 && formBlur.email && (
                <span className="error-span">{errors.email} </span>
              )}
            </div>
          </div>
          <div className="form-control form-control-password">
            <label htmlFor="password">Password</label>
            <div className="inner">
              <input type={`${isShowPassword ? 'text' : 'password'}`} name="password" value={form.password || ''} onChange={handleChange} onBlur={() => setFormBlur({ ...formBlur, password: true })} />
              {errors.password.length > 0 && formBlur.password && (
                <span className="error-span">{errors.password} </span>
              )}
              {isShowPassword ? (<div className="form-control-password-icon" onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}>
                <MdVisibilityOff />
              </div>) : (<div className="form-control-password-icon" onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}>
                <MdVisibility />
              </div>)}
            </div>

          </div>
          <Link to='/forgot-password' className='forgot-password'>
            Forgot your password?
          </Link>
          <button type='submit' >{isLogin ? 'Login' : 'Register'} </button>
          <p onClick={() => setIsLogin(isLogin => !isLogin)} className='toggle-login-register' >
            <AiOutlineInfoCircle />
            {isLogin ? (<>
              Don't have an account? <span> Register.</span>
            </>
            ) : (
              <>
                Already have an account? <span> Login.</span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}

export default AuthPage