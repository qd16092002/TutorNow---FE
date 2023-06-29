/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './Documents.module.sass'

const cx = classNames.bind(styles)

function Documents() {
  return <div className={cx('hello')}>Hello</div>
}

export default Documents
