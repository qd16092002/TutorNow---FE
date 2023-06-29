/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Profile.module.sass'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Profile() {
  const userInfo = useSelector((state) => state.auth.user)

  return (
    <div>
      <div className={cx('details')}>
        <div className={cx('__info')}>
          <div className={cx('item')}>
            <p>Tên người dùng </p>
            <p
              style={{
                color: '#7E7E7E',
                paddingBottom: '2px'
              }}
            >
              {userInfo?.first_name} {userInfo?.last_name}
            </p>
          </div>
          <div className={cx('item')}>
            <p>Ngày sinh</p>
            <p
              style={{
                color: '#7E7E7E',
                paddingBottom: '2px'
              }}
            >
              {userInfo?.date_of_birth}
            </p>
          </div>
          <div className={cx('item')}>
            <p>Giới tính</p>
            <p
              style={{
                color: '#7E7E7E',
                paddingBottom: '2px'
              }}
            >
              Nam
            </p>
          </div>
          <div className={cx('item')}>
            <p>Địa chỉ</p>
            <p
              style={{
                color: '#7E7E7E',
                paddingBottom: '2px'
              }}
            >
              {userInfo?.country}
            </p>
          </div>
          <div
            className={cx('item')}
            style={{
              border: 'none'
            }}
          >
            <p>CV</p>
            <p
              style={{
                color: '#7E7E7E',
                paddingBottom: '2px',
                display: 'flex'
              }}
            >
              <Link
                to='https://storage.googleapis.com/hust-files/2023-06-09/5578407897202688/cv_-_tran_quang_%C4%91ao_.4m.pdf'
                target='_blank'
              >
                <div className={cx('linkcv')}>LinkCV</div>
              </Link>

              <div className={cx('update')}>Cập nhật</div>
            </p>
          </div>
        </div>
      </div>
      <div className={cx('details')}>
        <div className={cx('__info')}>
          <div className={cx('item')}>
            <p>Email</p>
            <p
              style={{
                display: 'flex'
              }}
            >
              <div
                style={{
                  marginTop: '5px',
                  color: '#7E7E7E'
                }}
              >
                {userInfo?.email}
              </div>
            </p>
          </div>
          <div className={cx('item')}>
            <p>Số điện thoai</p>
            <p
              style={{
                color: '#7E7E7E',
                paddingBottom: '2px'
              }}
            >
              0824216169
            </p>
          </div>
          <div
            className={cx('item')}
            style={{
              border: 'none',
              height: '100px',
              marginTop: '-20px'
            }}
          >
            <p>Mật khẩu</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <div
                style={{
                  marginTop: '40px'
                }}
              >
                <div
                  className={cx('inputsettings')}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    color: '#555555',
                    fontSize: '14px'
                  }}
                >
                  *********
                </div>

                <div className={cx('changepassword')}>Đổi mật khẩu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
