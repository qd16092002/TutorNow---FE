/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind'
import styles from './Signup.module.sass'
import { Row, Col } from 'antd'
import login_bg from '@src/assets/images/login_bg.png'
import logologin from '@src/assets/images/logologin.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
// import { FacebookLogo, GoogleLogo } from '@src/assets/svgs'
import { useSignupMutation } from '../authService'
import ReactLoading from 'react-loading'
import { useSelector } from 'react-redux'
import { EyeClose, EyeShow } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function Signup() {
  const [signup, { isLoading }] = useSignupMutation()
  const [notAgree, setNotAgree] = useState(false)
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    isAgree: false
  })
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const [eyeShow, setEyeShow] = useState(false)

  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    if (!formData.isAgree) {
      setNotAgree(true)
    } else {
      try {
        const response = await signup({
          username: data.username,
          email: data.email,
          role: data.role,
          password: data.password
        }).unwrap()

        console.log('response:: ', response)
        if (!response.error) {
          //redirect login page
          navigate('/login')
        }
      } catch (error) {
        if (error.data.detail === 'Username already exists')
          setError('username', { type: 'manual', message: error.data.detail }, { shouldFocus: true })
        else setError('email', { type: 'manual', message: error.data.detail }, { shouldFocus: true })
        console.log('error: ', error)
      }
    }
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
        <div className={cx('form-wrapper')}>
          <div className={cx('form')}>
            <h3>SIGN UP</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row gutter={24}>
                <Col xs={24}>
                  <div className={cx('form-field')}>
                    <label htmlFor='username'>Username</label>
                    <input
                      className={cx(errors.username ? 'error' : '')}
                      {...register('username', { required: 'Username is required' })}
                      id='username'
                      type='text'
                      placeholder='Enter your username'
                    />
                    {errors.username && (
                      <p className={cx('error-text')} role='alert'>
                        {errors.username?.message}
                      </p>
                    )}
                  </div>
                </Col>
                <Col xs={24}>
                  <div className={cx('form-field')}>
                    <label htmlFor='email-login'>Email</label>
                    <input
                      // onChange={(e) => {
                      //   setFormData({ ...formData, email: e.target.value })
                      // }}
                      className={cx(errors.email ? 'error' : '')}
                      {...register('email', { required: 'Email address is required' })}
                      id='email-login'
                      type='email'
                      placeholder='Enter your email'
                    />
                    {errors.email && (
                      <p className={cx('error-text')} role='alert'>
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </Col>
                <Col xs={24}>
                  <div className={cx('form-field')}>
                    <label htmlFor='password-login'>Password</label>
                    <input
                      className={cx(errors.password ? 'error' : '')}
                      // onChange={(e) => {
                      //   setFormData({ ...formData, password: e.target.value })
                      // }}
                      {...register('password', { required: 'Password is required' })}
                      id='password-login'
                      type={eyeShow ? 'text' : 'password'}
                      placeholder='Enter your password (+8 characters)'
                    />
                    <div className={cx('eye-icon')} onClick={() => setEyeShow(!eyeShow)}>
                      {eyeShow ? <EyeShow /> : <EyeClose />}
                    </div>
                    {errors.password && (
                      <p className={cx('error-text')} role='alert'>
                        {errors.password?.message}
                      </p>
                    )}
                    {/* <div className={cx('error-text')}>*Wrong password</div> */}
                  </div>
                </Col>
                <Col xs={24}>
                  <div className={cx('form-field')}>
                    <label htmlFor='role'>Role</label>
                    <select {...register('role')} className={cx('role')} id='role'>
                      <option className={cx('option')} value='TUTOR'>
                        TUTOR
                      </option>
                      <option className={cx('option')} value='STUDENT'>
                        STUDENT
                      </option>
                    </select>
                  </div>
                </Col>
              </Row>

              <div className={cx('password-check')}>
                <div className={cx('checkbox')}>
                  <label htmlFor='remember-login'>
                    <div
                      style={
                        formData.isAgree
                          ? { background: 'rgba(255, 255, 255, 0.3)', border: 'none' }
                          : { background: 'none', border: '1px solid rgba(255, 243, 243, 1)' }
                      }
                      className={cx('check-icon')}
                    >
                      {formData.isAgree && <CheckIcon />}
                    </div>
                    <div className={cx('text')}>I agree to TutorNow Terms and Privacy policy</div>
                  </label>
                  <input
                    id='remember-login'
                    onChange={(e) => {
                      setNotAgree(false)
                      setFormData({ ...formData, isAgree: e.target.checked })
                    }}
                    type='checkbox'
                  />
                </div>
              </div>
              {notAgree && <div className={cx('error-message-input')}>You must agree to sign up!</div>}
              <button className={cx('button')} type='submit' disabled={isLoading}>
                {isLoading ? <ReactLoading type='bubbles' height={32} width={32} /> : 'Sign up'}
              </button>
            </form>
            <div
              style={{
                marginTop: 'auto'
              }}
              className={cx('navigate-guide')}
            >
              Already have an account?{' '}
              <Link className={cx('signup')} to='/login'>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
