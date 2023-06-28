/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './Teams.module.sass'

const cx = classNames.bind(styles)

function Teams() {
  return <div className={cx('hello')}>Hello</div>
}

export default Teams
