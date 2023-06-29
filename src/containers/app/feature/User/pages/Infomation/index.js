/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Infomation.module.sass'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function Infomation() {
  const userInfo = useSelector((state) => state.auth.user)

  return (
    <div className={cx('content')}>
      <div className={cx('avatar')}>{userInfo?.username && userInfo?.username[0]?.toUpperCase()}</div>
      <div
        style={{
          display: 'flex',
          marginLeft: '10px'
        }}
      >
        <div>Quản lý thông tin</div>
      </div>
    </div>
  )
}

export default Infomation
