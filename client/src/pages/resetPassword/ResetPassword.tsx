import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

interface Form {
  password: string
  confirmPassword: string
}

const ResetPassword = () => {
  const [form, setForm] = useState({ password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' })
  const [isShowPassword, setIsShowPassword] = useState(false)

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
    // do something
  }

  const validate = (form: Form) => {
    let errors: any = { password: "", confirmPassword: '' }
    if (form.password.length === 0) {
      errors.password = 'Password name is required!'
    }
    if (form.password.length > 0 && form.password.length < 8) {
      errors.password = 'Password name must be at least 8 characters!'
    }

    if (form.confirmPassword.length === 0) {
      errors.confirmPassword = 'Password name is required!'
    }
    if (form.confirmPassword.length > 0 && form.confirmPassword.length < 8 || form.confirmPassword.length > 7 && (form.confirmPassword !== form.password)) {
      errors.confirmPassword = 'Passwords do not match!'
    }
    return errors
  }

  const isValid = () => {
    return (
      errors.password.length === 0 && errors.confirmPassword.length
    )
  }

  return (
    <div className="reset-password">
      <div className="reset-password-container">
        <div className="auth-heading">
          <h1>Reset your password</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-control form-control-password">
            <input type={`${isShowPassword ? 'text' : 'password'}`} name="password" value={form.password || ''} placeholder='Password' onChange={handleChange} />
            {isShowPassword ? (
              <div className="form-control-password-icon" onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}>
                <MdVisibilityOff className="icon" />
              </div>
            ) : (
              <div className="form-control-password-icon" onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}>
                <MdVisibility className="icon" />
              </div>
            )}
            {errors.password.length > 0 && (
              <span className="error">{errors.password} </span>
            )}
          </div>
          <div className="form-control">
            <input type="password" name="confirmPassword" value={form.confirmPassword || ''} placeholder='Confirm password' onChange={handleChange} />
            {errors.confirmPassword.length > 0 && (
              <span className="error">{errors.confirmPassword} </span>
            )}
          </div>
          <button type="submit">Change your password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword