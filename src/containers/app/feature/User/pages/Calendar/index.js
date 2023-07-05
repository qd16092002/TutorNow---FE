/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Calendar.module.sass'
// import FilterFuntion from '../../components/Filter'
import TableCalendar from '../../components/TableCalendar'

const cx = classNames.bind(styles)

function Calendar() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>Quản lý lịch học</div>
        {/* <div className={cx('toolts')}>
          <div>
            <FilterFuntion />
          </div>
          <div></div>
        </div> */}
      </div>
      <div
        style={{
          width: '90%',
          marginTop: '20px'
        }}
      >
        <TableCalendar />
      </div>
    </div>
  )
}

export default Calendar
