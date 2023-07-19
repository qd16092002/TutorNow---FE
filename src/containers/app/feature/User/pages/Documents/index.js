/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './Documents.module.sass'
import AddDocuments from '../../components/AddDocuments'
import ListDocuments from '../../components/ListDocuments'
import { Toaster } from 'react-hot-toast'

const cx = classNames.bind(styles)

function Documents() {
  return (
    <div className={cx('form-wallpaper')}>
      <Toaster position='top-center' />
      <div className={cx('header')}>
        <div className={cx('title')}>Quản lý tài liệu</div>
      </div>
      <div>
        <AddDocuments />
      </div>
      <div className={cx('list_documents')}>
        <ListDocuments />
      </div>
    </div>
  )
}

export default Documents
