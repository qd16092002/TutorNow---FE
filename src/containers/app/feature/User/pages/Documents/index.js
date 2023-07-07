/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './Documents.module.sass'
import AddDocuments from '../../components/AddDocuments'

const cx = classNames.bind(styles)

function Documents() {
  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>Quản lý tài liệu</div>
      </div>
      <div>
        <AddDocuments />
      </div>
    </div>
  )
}

export default Documents
