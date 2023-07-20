/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ClassDetails.module.sass'
import { useEffect } from 'react'
import { useGetCalendarbyIDMutation, userApi } from '../../userService'

const cx = classNames.bind(styles)

function ClassDetails({ id }) {
  const [getcalendarbyid, { data: calendarbyid }] = useGetCalendarbyIDMutation(userApi.endpoints.getCalendarbyID)
  console.log(calendarbyid)
  useEffect(() => {
    getcalendarbyid(id)
  }, [getcalendarbyid, id])
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('title')}>Chi tiết </div>
      <div className={cx('content')}>
        <div className={cx('items')}>
          <p>Tên học sinh</p>
          <div>{calendarbyid?.nameStudent}</div>
        </div>
        <div className={cx('items')}>
          <p>Mã lớp</p>
          <div>{calendarbyid?.codeClass}</div>
        </div>
        <div className={cx('items')}>
          <p>Môn</p>
          <div>{calendarbyid?.subject}</div>
        </div>
        <div className={cx('items')}>
          <p>Thời gian học</p>
          <div>{calendarbyid?.time}</div>
        </div>
        <div className={cx('items')}>
          <p>Số buổi đã học</p>
          <div>{calendarbyid?.numberoflessonslaeared}</div>
        </div>
        <div className={cx('items')}>
          <p>Địa chỉ</p>
          <div>{calendarbyid?.location}</div>
        </div>
        <div
          className={cx('items')}
          style={{
            borderBottom: 'none'
          }}
        >
          <p>Học phí</p>
          <div>{calendarbyid?.cost}</div>
        </div>
      </div>
    </div>
  )
}

export default ClassDetails
