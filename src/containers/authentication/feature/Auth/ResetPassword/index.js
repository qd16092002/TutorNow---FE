import login_bg from '@src/assets/images/login_bg.png'
import { Col, Row } from 'antd'
import classNames from 'classnames/bind'
import styles from './ForgotPassword.module.sass'
// import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8 } from '@src/assets/svgs'
import { useForm } from 'react-hook-form'

const cx = classNames.bind(styles)

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('data:: ', data)
  }

  return (
    <div className={cx('forgot-password-wrapper')}>
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
              {/* <>
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

                  <button className={cx('button')} type='submit'>
                    Continue
                  </button>
                </form>
              </> */}
              <div className={cx('data-sent')}>
                <p className={cx('text-top')}>
                  We sent a reset link to your email Quyen.tth@orai.io. Please check your email and click the link to
                  set your new password.
                </p>
                <p className={cx('text-bottom')}>Haven’t you receive the email?</p>
                <div className={cx('try-again')}>Try again</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPassword
