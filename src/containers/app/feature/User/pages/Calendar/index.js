/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './Calendar.module.sass'

const cx = classNames.bind(styles)

function Calendar() {
  return <div className={cx('hello')}>Hello</div>
}

export default Calendar
