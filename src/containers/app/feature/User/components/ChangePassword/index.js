/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ChangePassword.module.sass'
import { Col, Row } from 'antd'
import AppButton from '@src/components/AppButton'
import { EyeClose, EyeShow } from '@src/assets/svgs'
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'

const cx = classNames.bind(styles)

function ChangePassword() {
  const [eyeShow1, setEyeShow1] = useState(false)
  const [eyeShow2, setEyeShow2] = useState(false)
  const [eyeShow3, setEyeShow3] = useState(false)

  const methods = useForm()

  const handleSubmit = () => {}

  return (
    <div style={{ overflow: 'clip' }}>
      <div className={cx('title')}>Đổi mật khẩu</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => handleSubmit(data))}>
          <Row>
            <Col className={cx('input-wraper')}>
              <input
                id='currentPassword'
                {...methods.register('currentPassword', { required: true })}
                type={eyeShow1 === true ? 'text' : 'password'}
                placeholder='Mật khẩu cũ'
              />

              <div className={cx('eye-icon')} onClick={() => setEyeShow1(!eyeShow1)}>
                {eyeShow1 ? <EyeShow /> : <EyeClose />}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className={cx('input-wraper')}>
              <input
                id='newPassword'
                {...methods.register('newPassword', { required: true })}
                type={eyeShow2 === true ? 'text' : 'password'}
                placeholder='Nhập mật khẩu mới'
              />

              <div className={cx('eye-icon')} onClick={() => setEyeShow2(!eyeShow2)}>
                {eyeShow2 ? <EyeShow /> : <EyeClose />}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className={cx('input-wraper')}>
              <input
                id='confirmPassword'
                {...methods.register('confirmPassword', { required: true })}
                type={eyeShow3 === true ? 'text' : 'password'}
                placeholder='Nhập lại mật khẩu mới'
              />

              <div className={cx('eye-icon')} onClick={() => setEyeShow3(!eyeShow3)}>
                {eyeShow3 ? <EyeShow /> : <EyeClose />}
              </div>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'flex-end' }}>
            <Col>
              <AppButton className={cx('button')} type='submit'>
                Xác nhận
              </AppButton>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </div>
  )
}

export default ChangePassword
