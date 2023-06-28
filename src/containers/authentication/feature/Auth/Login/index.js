/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import login_bg from '@src/assets/images/login_bg.png'
import logologin from '@src/assets/images/logologin.png'
import classNames from 'classnames/bind'
import styles from './Login.module.sass'
// import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8 } from '@src/assets/svgs'
import { CheckIcon } from '@heroicons/react/20/solid'
import AppButton from '@src/components/AppButton'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useLazyGetLayoutUserQuery, useLoginMutation, useVerifyOTPMutation } from '../authService'
import VerificationCode from '../components/VerificationCode'
import ReactLoading from 'react-loading'
import { login, setUser } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { EyeClose, EyeShow, FacebookLogin } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function Login() {
  const [formData, setFormData] = useState({
    username: null,
    password: null,
    isRememberPassword: false
  })
  const [eyeShow, setEyeshow] = useState(false)
  const [code, setCode] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [error, setError] = useState(false)
  const [errorCode, setErrorCode] = useState(false)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [ableResendCode, setAbleResendCode] = useState(false)
  const [timeToWait, setTimeToWait] = useState(30)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [loginRequest, { isFetching, isLoading }] = useLoginMutation()
  const [verifyOTP, { isLoading: isVerifying }] = useVerifyOTPMutation()
  const [getLayoutUser] = useLazyGetLayoutUserQuery()

  useEffect(() => {
    let timeoutId

    if (timeToWait > 0)
      timeoutId = setTimeout(() => {
        setTimeToWait(timeToWait - 1)
      }, 1000)
    // Wait for 1 second before updating elapsed time
    else {
      setAbleResendCode(true)
    }
    return () => clearTimeout(timeoutId)
  }, [timeToWait])

  console.log('timeToWait:: ', timeToWait)

  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  async function handleResendCode() {
    if (ableResendCode) {
      setAbleResendCode(false)
      setTimeToWait(30)
      const response = await loginRequest({ username: formData.username, password: formData.password })
      console.log('response:: ', response)
      if (!response.error) {
        setSubmitted(true)
      } else setError(true)
    }
  }

  async function submit() {
    const response = await verifyOTP({
      username: formData.username,
      password: formData.password,
      mail_otp: code
    })

    console.log('response:: ', response)

    if (response.error) {
      setErrorCode(true)
    } else {
      console.log('getting LayoutUser')
      getLayoutUser(null, false)
        .then((response) => {
          console.log('LayoutUser:: ', response)
          dispatch(setUser(response.data))
          dispatch(login())
          navigate('/overview')
        })
        .catch((err) => console.log(err))
    }
  }
  console.log('status: ', isLoading, isFetching)

  const onSubmit = async (data) => {
    setFormData({ ...formData, username: data.username, password: data.password })
    const response = await loginRequest(data)

    if (!response.error) {
      setSubmitted(true)
      setTimeToWait(30)
    } else setError(true)
  }

  return (
    <div className={cx('login-wrapper')}>
      <div>
        <div className={cx('background-wrapper')}>
          <div className={cx('background')}>
            <div className={cx('img2')}>
              <img src={logologin} alt='logo' />
            </div>
            <div className={cx('img')} style={{ backgroundImage: `url(${login_bg})` }}></div>
          </div>
        </div>
      </div>
      <div>
        {!submitted ? (
          <div className={cx('form-wrapper')}>
            <div className={cx('form')}>
              <h3>Welcome back</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cx('form-field')}>
                  <label htmlFor='username-login'>Username</label>
                  <input
                    // onChange={(e) => {
                    //   setFormData({ ...formData, email: e.target.value })
                    // }}
                    className={cx(errors.username ? 'error' : '')}
                    {...register('username', {
                      required: 'Username address is required',
                      onChange: () => setError(false)
                    })}
                    id='username-login'
                    type='text'
                    placeholder='Enter your username'
                  />
                  {errors.username && (
                    <p className={cx('error-text')} role='alert'>
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className={cx('form-field')}>
                  <label htmlFor='password-login'>Password</label>
                  <input
                    className={cx(errors.password ? 'error' : '')}
                    // onChange={(e) => {
                    //   setFormData({ ...formData, password: e.target.value })
                    // }}
                    {...register('password', { required: 'Password is required', onChange: () => setError(false) })}
                    id='password-login'
                    type={eyeShow === true ? 'text' : 'password'}
                    placeholder='Enter your password'
                  />
                  <div className={cx('eye-icon')} onClick={() => setEyeshow(!eyeShow)}>
                    {eyeShow ? <EyeShow /> : <EyeClose />}
                  </div>
                  {errors.password && (
                    <p className={cx('error-text')} role='alert'>
                      {errors.password?.message}
                    </p>
                  )}
                  {/* <div className={cx('error-text')}>*Wrong password</div> */}
                </div>
                {error && (
                  <div style={{ marginBottom: '8px' }} className={cx('error-text')}>
                    Sorry, the username or password you provided is incorrect.
                  </div>
                )}
                <div className={cx('password-check')}>
                  <div className={cx('checkbox')}>
                    <label htmlFor='remember-login'>
                      <div
                        style={
                          formData.isRememberPassword
                            ? { background: 'rgba(255, 255, 255, 0.3)', border: 'none' }
                            : { background: 'none', border: '1px solid rgba(255, 243, 243, 1)' }
                        }
                        className={cx('check-icon')}
                      >
                        {formData.isRememberPassword && <CheckIcon />}
                      </div>
                      <div className={cx('text')}>Remember password</div>
                    </label>
                    <input
                      id='remember-login'
                      onChange={(e) => {
                        setFormData({ ...formData, isRememberPassword: e.target.checked })
                      }}
                      type='checkbox'
                    />
                  </div>
                  <button className={cx('button')} type='submit'>
                    {isLoading ? <ReactLoading type='bubbles' height={32} width={32} /> : 'Login'}
                  </button>
                </div>
              </form>
              <div style={{ marginTop: 'auto' }}>
                <div className={cx('or')}>
                  <div className={cx('vecto')}></div>
                  <div>or</div>
                  <div className={cx('vecto')}></div>
                </div>
                <div className={cx('loginwithfacebook')}>
                  <div>
                    <FacebookLogin />
                  </div>{' '}
                  <div
                    style={{
                      marginTop: '3px'
                    }}
                  >
                    Sign in with a Facebook Account
                  </div>
                </div>
                <div className={cx('navigate-guide')}>
                  Don&apos;t have account?{' '}
                  <Link to='/signup' className={cx('signup')}>
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx('form-wrapper-2')}>
            <div className={cx('form')}>
              <h3>Check your email</h3>
              <div className={cx('desc')}>
                We’ve sent you a six-digit confirmation code to your email. Please enter it below to continue.
              </div>
              <div className={cx('code')}>
                <VerificationCode onEnter={submit} callback={setCode} onChange={() => setErrorCode(false)} />
              </div>
              {errorCode && (
                <div style={{ marginBottom: '8px' }} className={cx('error-text')}>
                  Sorry, the verification code you entered is incorrect or has expired!
                </div>
              )}
              <AppButton
                onClick={submit}
                isLoading={isVerifying}
                style={{ background: 'linear-gradient(96.06deg, #526AEA 4.1%, #B0AEFF 146.32%)' }}
              >
                Continue
              </AppButton>

              <div onClick={handleResendCode} className={cx('resend')}>
                {timeToWait !== 0 ? `Resend code in ${timeToWait}` : `Resend code`}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
