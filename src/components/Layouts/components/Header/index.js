import classNames from 'classnames/bind'
import styles from './Header.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { BellNotification, IconButtonSignIn, IconButtonSignUp, IconProfile, SignOutIcon } from '@src/assets/svgs'
import TutorNowLogo from '@src/assets/images/TutorNowLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import AppButton from '@src/components/AppButton'
import { Divider, Dropdown, Menu } from 'antd'
import AppLongText from '@src/components/AppLongText/AppLongText'
import { logout } from '@src/containers/authentication/feature/Auth/authSlice'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
const cx = classNames.bind(styles)

function Header() {
  const userInfo = useSelector((state) => state.auth.user)
  console.log('userInfo:: ', userInfo)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    cookies.remove('access_token')
    navigate('/')
  }
  return (
    <header className={cx('header-wrapper')}>
      <div>
        <Link to='/'>
          <img className={cx('logo')} src={TutorNowLogo} alt='logo' />
        </Link>
      </div>
      <div className={cx('iconheader')}>
        {isLoggedIn ? (
          <div>
            {/* <Link to='/profile'> */}
            <div
              style={{
                display: 'flex'
              }}
            >
              <div className={cx('notification')}>
                <BellNotification />
              </div>

              <Dropdown
                overlay={
                  <Menu style={{ borderRadius: '10px', padding: '10px', maxWidth: '350px' }}>
                    <div
                      style={{
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <div
                          style={{
                            fontWeight: '700',
                            color: 'rgba(88, 112, 86, 1)',
                            fontSize: '20px'
                          }}
                        >
                          Tài khoản
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <div className={cx('avatar2')}>
                            {userInfo?.username && userInfo?.username[0]?.toUpperCase()}
                          </div>
                          <div
                            style={{
                              marginLeft: '10px'
                            }}
                          >
                            <div
                              style={{
                                fontWeight: '600',
                                color: 'rgba(88, 112, 86, 1)',
                                fontSize: '14px'
                              }}
                            >
                              {userInfo?.first_name} {userInfo?.last_name}
                            </div>
                            <div
                              style={{
                                fontWeight: '400',
                                color: 'rgba(88, 112, 86, 1)',
                                fontSize: '12px'
                              }}
                            >
                              {userInfo?.username}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Divider
                      style={{
                        margin: '5px 0px 0px 0px'
                      }}
                    />
                    <Menu.Item>
                      <Link to='/infomation'>
                        <div className={cx('header__icon')}>
                          <IconProfile />
                          <div
                            style={{
                              marginLeft: '3px'
                            }}
                          >
                            Hồ sơ cá nhân
                          </div>
                        </div>
                      </Link>
                    </Menu.Item>
                    <Menu.Item onClick={() => handleLogout(true)}>
                      <div className={cx('header__icon')}>
                        <SignOutIcon />
                        <div
                          style={{
                            marginLeft: '3px'
                          }}
                        >
                          Đăng xuất
                        </div>
                      </div>
                    </Menu.Item>
                  </Menu>
                }
                placement='bottom'
                trigger={['click']}
                // arrow={{ pointAtCenter: true }}
              >
                <div style={{ cursor: 'pointer', display: 'flex' }}>
                  <div className={cx('avatar')}>{userInfo?.username && userInfo?.username[0]?.toUpperCase()}</div>
                  <div
                    style={{
                      marginLeft: '10px',
                      marginTop: '5px'
                    }}
                  >
                    <div className={cx('name')}>{userInfo?.username}</div>
                    <AppLongText
                      styles={{
                        color: 'rgba(255, 255, 255, 1)',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                      text={userInfo?.role}
                    ></AppLongText>
                  </div>
                </div>
              </Dropdown>
            </div>
            {/* </Link> */}
          </div>
        ) : (
          <div className={cx('auth')}>
            <Link to='/login'>
              <AppButton className={cx('signin')}>
                <div
                  style={{
                    marginTop: '3px'
                  }}
                >
                  <IconButtonSignIn />
                </div>
                Sign In
              </AppButton>
            </Link>
            <Link to='/signup'>
              <AppButton className={cx('signup')}>
                <div
                  style={{
                    marginTop: '3px'
                  }}
                >
                  <IconButtonSignUp />
                </div>
                Sign Up
              </AppButton>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
