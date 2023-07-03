/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Infomation.module.sass'
import { AvatarQD } from '@src/assets/svgs'
import { useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import { useState } from 'react'
import Profile from '../../components/Profile'
import EditProfile from '../../components/EditProfile'

const cx = classNames.bind(styles)
const TABS = {
  PROFILE: {
    code: 'PROFILE'
  },
  EDITPROFILE: {
    code: 'EDITPROFILE'
  }
}

function Infomation() {
  const userInfo = useSelector((state) => state.auth.user)
  const [activeTab, setActiveTab] = useState(TABS.PROFILE)

  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('content')}>
        <div className={cx('avatar')}>
          <AvatarQD />
        </div>
        <div className={cx('title')}>
          <div className={cx('name')}>Quản lý thông tin</div>
          <div className={cx('email')}>{userInfo?.email}</div>
        </div>
      </div>
      <div>
        <Row className={cx('header')}>
          <Col>
            <div className={cx('header__process')}>
              <div
                className={cx('header__title', activeTab.code === TABS.PROFILE.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.PROFILE)}
              >
                Hồ sơ cá nhân
              </div>
              <div
                className={cx('header__title', activeTab.code === TABS.EDITPROFILE.code ? 'active' : 'inactive')}
                onClick={() => setActiveTab(TABS.EDITPROFILE)}
              >
                Cài đặt & Chỉnh sửa hồ sơ
              </div>
            </div>
          </Col>
        </Row>
        {activeTab.code === TABS.EDITPROFILE.code && <EditProfile />}
        {activeTab.code === TABS.PROFILE.code && <Profile />}
        {/* {activeTab.code === TABS.EDITPROFILE.code && <Profile />}
        {activeTab.code === TABS.PROFILE.code && <EditProfile />} */}
      </div>
    </div>
  )
}

export default Infomation
