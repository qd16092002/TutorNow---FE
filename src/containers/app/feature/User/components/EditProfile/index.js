/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './EditProfile.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useChangeUserInformationMutation } from '../../userService'
import { setUser } from '@src/containers/authentication/feature/Auth/authSlice'
import { authApi } from '@src/containers/authentication/feature/Auth/authService'

const cx = classNames.bind(styles)

function EditProfile() {
  const userInfo = useSelector((state) => state.auth.user)
  const { register, handleSubmit } = useForm()
  const formInput = useRef()
  const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()

  // const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()
  const dispatch = useDispatch()
  const [getProfile] = authApi.endpoints.getLayoutUser.useLazyQuery()

  const onSubmit = async (data, e) => {
    const updateResponse = await updateUser(data)
    e.preventDefault()

    if (!updateResponse?.error) {
      toast.success('Update information successfully!')
      const response = await getProfile({}, false)
      if (!response?.error) {
        console.log('response::  ', response)
        dispatch(setUser(response.data[0]))
      }
    } else {
      toast.error('Something went wrong, please try again')
    }
  }
  return (
    <div>
      <Toaster position='top-center' />
      <form onSubmit={handleSubmit(onSubmit)} className={cx('details')}>
        <div className={cx('__info')}>
          <div className={cx('item')}>
            <p>Tên người dùng </p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm tên người dùng'
              type='text'
              {...register('fullName')}
              defaultValue={userInfo?.fullName}
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Ngày sinh</p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm ngày sinh'
              type='text'
              {...register('date_of_birth')}
              defaultValue={userInfo?.date_of_birth}
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Giới tính</p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm giới tính'
              type='text'
              {...register('gender')}
              defaultValue={userInfo?.gender}
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Địa chỉ</p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm địa chỉ'
              type='text'
              {...register('address')}
              defaultValue={userInfo?.address}
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Số điện thoai</p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm số điện thoại'
              type='text'
              {...register('phoneNumber')}
              defaultValue={userInfo?.phoneNumber}
            ></input>
          </div>
          <div className={cx('footer')}>
            <div className={cx('title')}> Click vào từng trường để sửa</div>
            <button
              onClick={() => {
                formInput.current.click()
              }}
              type='submit'
              disabled={isUpdating}
              className={cx('button')}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
