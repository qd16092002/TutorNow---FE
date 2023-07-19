/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import React, { useRef } from 'react'
import styles from './AddCalendar.module.sass'
import { IconCloseAppModal } from '@src/assets/svgs'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useCreatCalendarMutation, useLazyGetCalendarQuery } from '../../userService'
import { useDispatch } from 'react-redux'
import { setCalendar } from '../../userSlice'

const cx = classNames.bind(styles)
function AddCalendar({ onClose }) {
  const { register, handleSubmit } = useForm()
  const formInput = useRef()
  const [creatCalendar, { isLoading: isUpdating }] = useCreatCalendarMutation()
  const [getCalendar] = useLazyGetCalendarQuery({})
  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    const createcalendar = await creatCalendar(data)
    e.preventDefault()

    if (!createcalendar?.error) {
      toast.success('Update Calendar successfully!')
      const response = await getCalendar({}, false)
      onClose()
      if (!response?.error) {
        console.log('response::  ', response)
        dispatch(setCalendar(response.data[0]))
      }
    } else {
      toast.error('Something went wrong, please try again')
    }
  }
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>
        <div>Thêm khóa học</div>
        <div onClick={onClose} className={cx('iconclose')}>
          <IconCloseAppModal />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cx('content')}>
        <div className={cx('row')}>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Tên học sinh</div>
            <input type='text' {...register('nameStudent')} className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Tên gia sư</div>
            <input type='text' {...register('nameTutor')} className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Mã số lớp</div>
            <input type='text' {...register('codeClass')} className={cx('input')} placeholder='Nhập...'></input>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Môn học</div>
            <select {...register('subject')} className={cx('input')} placeholder='Chọn'>
              <option value='Toán'>Toán</option>
              <option value='Vật lí'>Vật lí</option>
              <option value='Hóa học'>Hóa học</option>
              <option value='Sinh học'>Sinh học</option>
              <option value='Tin học'>Tin học</option>
              <option value='Lịch sử'>Lịch sử</option>
              <option value='Ngữ văn'>Ngữ văn</option>
              <option value='Địa lí'>Địa lí</option>
            </select>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Thời gian học</div>
            <input type='text' {...register('time')} className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Địa chỉ</div>
            <input type='text' {...register('location')} className={cx('input')} placeholder='Nhập...'></input>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Học phí</div>
            <input type='text' {...register('cost')} className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Số buổi</div>
            <input
              type='text'
              {...register('numberoflessonslaeared')}
              className={cx('input')}
              placeholder='Nhập...'
            ></input>
          </div>
          <button
            onClick={() => {
              formInput.current.click()
            }}
            type='submit'
            disabled={isUpdating}
            className={cx('button')}
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCalendar
