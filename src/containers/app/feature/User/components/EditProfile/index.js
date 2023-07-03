/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './EditProfile.module.sass'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { Toaster, toast } from 'react-hot-toast'

const cx = classNames.bind(styles)

function EditProfile() {
  const userInfo = useSelector((state) => state.auth.user)
  const {
    register,
    handleSubmit

    // formState: { errors }
  } = useForm()
  const formInput = useRef()
  // const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()
  const onSubmit = async () => {
    toast.success('Update information successfully!')
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
              {...register('first_name')}
              defaultValue={userInfo?.first_name}
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
              defaultValue='Nam'
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Địa chỉ</p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm địa chỉ'
              type='text'
              {...register('country')}
              defaultValue={userInfo?.country}
            ></input>
          </div>
          <div className={cx('item')}>
            <p>Số điện thoai</p>
            <input
              className={cx('inputsettings')}
              placeholder='Thêm số điện thoại'
              type='text'
              {...register('phone_number')}
              defaultValue='0824216169'
            ></input>
          </div>
          <div className={cx('footer')}>
            <div className={cx('title')}> Click vào từng trường để sửa</div>
            <button
              onClick={() => {
                formInput.current.click()
              }}
              type='submit'
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
