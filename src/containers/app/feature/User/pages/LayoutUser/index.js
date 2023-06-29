/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames/bind'
import styles from './LayoutUser.module.sass'
import { v4 as uuidv4 } from 'uuid'
import { Link, useLocation } from 'react-router-dom'
import { UserIconNavbar, CalendarIconNavbar, DocumentIconNavbar } from '@src/assets/svgs'
// import { useDispatch } from 'react-redux'
// import { logout } from '@src/containers/authentication/feature/Auth/authSlice'
// import Cookies from 'universal-cookie'
// import Avatar from '@src/components/Avatar'

// const cookies = new Cookies()

const cx = classNames.bind(styles)

const menu = [
  {
    icon: <UserIconNavbar />,
    title: 'Quản lý thông tin',
    link: '/infomation'
  },
  {
    icon: <CalendarIconNavbar />,
    title: 'Quản lý lịch học',
    link: '/calendar'
  },
  {
    icon: <DocumentIconNavbar />,
    title: 'Quản lý tài liệu',
    link: '/document'
  }
]

function LayoutUser() {
  const location = useLocation()

  return (
    <div className={cx('LayoutUser-wrapper')}>
      <div className={cx('user-card')}>
        <ul className={cx('menu')}>
          {menu.map((item, index) => {
            return (
              <Link key={uuidv4(item.link)} to={item.link}>
                <li className={cx(location.pathname === item.link ? 'active' : '')} key={uuidv4(index)}>
                  <div className={cx('icon')}>{item.icon}</div>
                  <p>{item.title}</p>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default LayoutUser
