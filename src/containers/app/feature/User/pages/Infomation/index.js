/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Infomation.module.sass'
import { useSelector } from 'react-redux'
import { Col, Row } from 'antd'
import { useState } from 'react'
import Profile from '../../components/Profile'
import EditProfile from '../../components/EditProfile'
import ProfileStudent from '../../components/ProfileStudent'
import ProfileTutor from '../../components/ProfileTutor'

const cx = classNames.bind(styles)
const TABS = {
  PROFILE: {
    code: 'PROFILE'
  },
  EDITPROFILE: {
    code: 'EDITPROFILE'
  },
  PROFILESUDENT: {
    code: 'PROFILESUDENT'
  },
  PROFILETUTOR: {
    code: 'PROFILETUTOR'
  }
}

function Infomation() {
  const userInfo = useSelector((state) => state.auth.user)
  const [activeTab, setActiveTab] = useState(TABS.PROFILE)

  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('content')}>
        <div className={cx('avatar')}>
          <div className={cx('avatar')}>{userInfo?.username && userInfo?.username[0]?.toUpperCase()}</div>
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
              {userInfo?.role === 'ADMIN' && (
                <div
                  className={cx('header__title', activeTab.code === TABS.PROFILESUDENT.code ? 'active' : 'inactive')}
                  onClick={() => setActiveTab(TABS.PROFILESUDENT)}
                >
                  Thông tin học sinh
                </div>
              )}

              {userInfo?.role === 'ADMIN' && (
                <div
                  className={cx('header__title', activeTab.code === TABS.PROFILETUTOR.code ? 'active' : 'inactive')}
                  onClick={() => setActiveTab(TABS.PROFILETUTOR)}
                >
                  Thông tin gia sư
                </div>
              )}
            </div>
          </Col>
        </Row>
        {activeTab.code === TABS.EDITPROFILE.code && <EditProfile />}
        {activeTab.code === TABS.PROFILE.code && <Profile />}
        {activeTab.code === TABS.PROFILESUDENT.code && <ProfileStudent />}
        {activeTab.code === TABS.PROFILETUTOR.code && <ProfileTutor />}
      </div>
    </div>
  )
}

export default Infomation
