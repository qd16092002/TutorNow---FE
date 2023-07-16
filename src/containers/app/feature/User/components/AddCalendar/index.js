import classNames from 'classnames/bind'
import React from 'react'
import styles from './AddCalendar.module.sass'
import { IconCloseAppModal } from '@src/assets/svgs'

const cx = classNames.bind(styles)
function AddCalendar() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>
        <div>Thêm khóa học</div>
        <div className={cx('iconclose')}>
          <IconCloseAppModal />
        </div>
      </div>
      <form className={cx('content')}>
        <div className={cx('row')}>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Tên học sinh</div>
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Tên gia sư</div>
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Mã số lớp</div>
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Môn học</div>
            <select className={cx('input')} placeholder='Chọn'>
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
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Địa chỉ</div>
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Học phí</div>
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <div className={cx('block')}>
            <div className={cx('nameinput')}>Số buổi</div>
            <input className={cx('input')} placeholder='Nhập...'></input>
          </div>
          <button type='submit' className={cx('button')}>
            Thêm
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCalendar
