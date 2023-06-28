/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import AppButton from '@src/components/AppButton'
import classNames from 'classnames/bind'
import { useState } from 'react'
import VerificationCode from '../components/VerificationCode'
import styles from './VerifyEmail.module.sass'
// import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8 } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function VerifyEmail() {
  const [code, setCode] = useState('')

  function submit() {
    console.log('data:: ', code)
  }

  return (
    <div className={cx('form-wrapper')}>
      <div className={cx('form')}>
        <h3>Check your email</h3>
        <div className={cx('desc')}>
          We’ve sent you a six-digit confirmation code to your email Quyen.tth@orai.io. Please enter it below to
          continue.
        </div>
        <div className={cx('code')}>
          <VerificationCode callback={setCode} />
        </div>
        <AppButton onClick={submit} style={{ background: 'linear-gradient(96.06deg, #526AEA 4.1%, #B0AEFF 146.32%)' }}>
          Continue
        </AppButton>

        <div onClick={submit} className={cx('resend')}>
          Resend code
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
