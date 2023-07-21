/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './Documents.module.sass'
import AddDocuments from '../../components/AddDocuments'
import ListDocuments from '../../components/ListDocuments'

import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function Documents() {
  const userInfo = useSelector((state) => state.auth.user)

  return (
    <div className={cx('form-wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>Quản lý tài liệu</div>
      </div>
      <div>
        {userInfo?.role === 'ADMIN' && (
          <div>
            <AddDocuments />
          </div>
        )}
        {userInfo?.role === 'TUTOR' && (
          <div>
            <AddDocuments />
          </div>
        )}
      </div>
      <div className={cx('list_documents')}>
        <ListDocuments />
      </div>
    </div>
  )
}

export default Documents
