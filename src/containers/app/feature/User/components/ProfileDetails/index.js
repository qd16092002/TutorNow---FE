/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileDetails.module.sass'
import { useEffect } from 'react'
import { useGetProfileByIdMutation, userApi } from '../../userService'

const cx = classNames.bind(styles)

function ProfileDetails({ id }) {
  const [getprofilebyid, { data: profilebyid }] = useGetProfileByIdMutation(userApi.endpoints.getProfileById)
  console.log(profilebyid)
  useEffect(() => {
    getprofilebyid(id)
  }, [getprofilebyid, id])
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('content')}>
        <div className={cx('items')}>
          <p>Họ và tên</p>
          <div>{profilebyid?.fullName}</div>
        </div>
        <div className={cx('items')}>
          <p>Ngày sinh</p>
          <div>{profilebyid?.date_of_birth}</div>
        </div>
        <div className={cx('items')}>
          <p>Giới tính</p>
          <div>{profilebyid?.gender}</div>
        </div>
        <div className={cx('items')}>
          <p>Số điện thoai</p>
          <div>{profilebyid?.phoneNumber}</div>
        </div>
        <div className={cx('items')}>
          <p>Địa chỉ</p>
          <div>{profilebyid?.address}</div>
        </div>
        <div
          className={cx('items')}
          style={{
            borderBottom: 'none'
          }}
        >
          <p>Email</p>
          <div>{profilebyid?.email}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
