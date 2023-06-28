/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import login_bg from '@src/assets/images/login_bg.png'
import { Col, Row } from 'antd'
import classNames from 'classnames/bind'
import styles from './ForgotPassword.module.sass'
// import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8 } from '@src/assets/svgs'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useForgotPasswordMutation } from '@src/containers/app/feature/User/userService'
import { Toaster, toast } from 'react-hot-toast'
import AppButton from '@src/components/AppButton'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const cx = classNames.bind(styles)

function ForgotPassword() {
  const [successSubmit, setSuccessSubmit] = useState(false)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()

  useEffect(() => {
    if (isLoggedIn) navigate('/')
  }, [isLoggedIn])

  const onSubmit = async (data) => {
    console.log('data:: ', data)
    const response = await forgotPassword(data)
    console.log('response: ', response)
    if (!response?.error) {
      setSuccessSubmit(true)
    } else {
      toast.error(response.error.data.detail)
    }
  }

  return (
    <div className={cx('forgot-password-wrapper')}>
      <Toaster />
      <Row>
        <Col md={12} sm={0} xs={0}>
          <div className={cx('background-wrapper')}>
            <div className={cx('background')}>
              {/* <div className={cx('vector1')}>
                <Vector1 />
              </div>
              <div className={cx('vector2')}>
                <Vector2 />
              </div>
              <div className={cx('vector3')}>
                <Vector3 />
              </div>
              <div className={cx('vector4')}>
                <Vector4 />
              </div>
              <div className={cx('vector5')}>
                <Vector5 />
              </div>
              <div className={cx('vector6')}>
                <Vector6 />
              </div>
              <div className={cx('vector7')}>
                <Vector7 />
              </div>
              <div className={cx('vector8')}>
                <Vector8 />
              </div> */}
              <div className={cx('img')} style={{ backgroundImage: `url(${login_bg})` }}>
                <div className={cx('gradient')}></div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={12} sm={24}>
          <div className={cx('form-wrapper')}>
            <div className={cx('form')}>
              <h3>Forgot your password?</h3>

              {successSubmit ? (
                <div className={cx('data-sent')}>
                  <p className={cx('text-top')}>
                    {`We sent a reset link to your email ${getValues(
                      'email'
                    )} Please check your email and click the link to
                    set your new password.`}
                  </p>
                  <p className={cx('text-bottom')}>Haven’t you receive the email?</p>
                  <div
                    onClick={() => {
                      setSuccessSubmit(false)
                    }}
                    className={cx('try-again')}
                  >
                    Try again
                  </div>
                </div>
              ) : (
                <>
                  <p className={cx('desc')}>
                    Don’t worry! Please enter your email address so we’ll send you a link to reset your password
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('form-field')}>
                      <label htmlFor='email-forgotPassword'>Email</label>
                      <input
                        // onChange={(e) => {
                        //   setFormData({ ...formData, email: e.target.value })
                        // }}
                        className={cx(errors.email ? 'error' : '')}
                        {...register('email', { required: 'Email address is required' })}
                        id='email-forgotPassword'
                        type='email'
                        placeholder='Enter your email'
                      />
                      {errors.email && (
                        <p className={cx('error-text')} role='alert'>
                          {errors.email?.message}
                        </p>
                      )}
                    </div>

                    <AppButton
                      style={{ background: 'linear-gradient(96.06deg, #526AEA 4.1%, #B0AEFF 146.32%)' }}
                      className={cx('button')}
                      type='submit'
                      isLoading={isLoading}
                    >
                      Continue
                    </AppButton>
                  </form>
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPassword
