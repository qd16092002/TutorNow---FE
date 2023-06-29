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
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const userInfo = useSelector((state) => state.auth.user)
  // const handleLogout = () => {
  //   dispatch(logout())
  //   cookies.remove('access_token')
  //   navigate('/')
  // }
  return (
    <div className={cx('LayoutUser-wrapper')}>
      <div className={cx('user-card')}>
        {/* <div className={cx('head')}> */}
        {/* <div className={cx('avatar')}>
            <Avatar username={userInfo?.username} />
          </div> */}
        {/* <div className={cx('avatar')}>{userInfo?.username && userInfo?.username[0]?.toUpperCase()}</div> */}
        {/* <div className={cx('info')}>
            <div className={cx('__name')}>{userInfo?.username}</div>
            {userInfo?.last_name ? (
              <div className={cx('__position')}>
                {userInfo?.first_name} {userInfo?.last_name}
              </div>
            ) : null}
          </div> */}
        {/* </div> */}
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
        {/* <button onClick={handleLogout} className={cx('sign-out')}>
          <p>Sign out</p>
          <SignOutIcon />
        </button> */}
      </div>
    </div>
  )
}

export default LayoutUser
