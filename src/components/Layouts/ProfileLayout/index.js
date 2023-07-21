/* eslint-disable no-unused-vars */
import cn from 'classnames/bind'
import styles from './ProfileLayout.module.sass'

import LayoutUser from '@src/containers/app/feature/User/pages/LayoutUser'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
const cx = cn.bind(styles)

function ProfileLayout({ children }) {
  return (
    <>
      <Header />
      <Toaster position='top-center' />
      <div className={cx('LayoutUser-layout')}>
        <div className={cx('main-content')}>
          <div className={cx('left')}>
            <LayoutUser />
          </div>
          <div className={cx('right')}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default ProfileLayout
