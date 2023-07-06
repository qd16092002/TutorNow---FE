/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileDetails.module.sass'

const cx = classNames.bind(styles)

function ProfileDetails() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('content')}>
        <div className={cx('items')}>
          <p>Họ và tên</p>
          <div>Trần Quang Đạo</div>
        </div>
        <div className={cx('items')}>
          <p>Ngày sinh</p>
          <div>16/09/2002</div>
        </div>
        <div className={cx('items')}>
          <p>Giới tính</p>
          <div>Nam</div>
        </div>
        <div className={cx('items')}>
          <p>Số điện thoai</p>
          <div>0824216169</div>
        </div>
        <div className={cx('items')}>
          <p>Địa chỉ</p>
          <div>Nhà abc phố bcd</div>
        </div>
        <div
          className={cx('items')}
          style={{
            borderBottom: 'none'
          }}
        >
          <p>Email</p>
          <div>tranquangdao16092002@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
