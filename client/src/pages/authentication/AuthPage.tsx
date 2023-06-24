import { useState } from 'react'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import './AuthPage.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface Form {
  firstName: string
  lastName: string
  email: string
  password: string
}

const AuthPage = () => {
  const [form, setForm] = useState<Form>({ firstName: '', lastName: '', email: '', password: '' })
  const [isLogin, setIsLogin] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '' })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value }
      setErrors(() => validate(updatedForm))
      return updatedForm
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!isValid()) return
    // if (isLogin) {
    //   dispatch(login(form))
    // } else {
    //   dispatch(register(form))
    // }
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
    return (
      errors.firstName.length === 0 && errors.lastName.length === 0 && errors.email.length === 0 && errors.password.length === 0
    )
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='auth'>
      <div className="wrapper">
        <h3>
          {isLogin ? 'Login to your account' : 'Create an account'}
        </h3>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-control">
                <label htmlFor="firstName">First name</label>
                <div className="inner">
                  <input type="text" name="firstName" value={form.firstName || ''} onChange={handleChange} />
                  {errors.firstName.length > 0 && (
                    <span className="error">{errors.firstName} </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="lastName">Last name</label>
                <div className="inner">
                  <input type="text" name="lastName" value={form.lastName || ''} onChange={handleChange} />
                  {errors.lastName.length > 0 && (
                    <span className="error">{errors.lastName} </span>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <div className="inner">
              <input type="email" name="email" value={form.email || ''} onChange={handleChange} />
              {errors.email.length > 0 && (
                <span className="error">{errors.email} </span>
              )}
            </div>
          </div>
          <div className="form-control form-control-password">
            <label htmlFor="password">Password</label>
            <div className="inner">
              <input type={`${isShowPassword ? 'text' : 'password'}`} name="password" value={form.password || ''} onChange={handleChange} />
              {errors.password.length > 0 && (
                <span className="error">{errors.password} </span>
              )}
              {isShowPassword ? (<div className="form-control-password-icon" onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}>
                <MdVisibilityOff />
              </div>) : (<div className="form-control-password-icon" onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}>
                <MdVisibility />
              </div>)}
            </div>

          </div>
          <p className='forgot-password'>
            Forgot your password?
          </p>
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