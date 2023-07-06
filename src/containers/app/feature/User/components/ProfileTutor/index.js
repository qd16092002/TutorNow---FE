/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileTutor.module.sass'
import { listTutor } from '@src/app-configs'
import { Table } from 'antd'
import { useState } from 'react'
import { IconUserSearch } from '@src/assets/svgs'
import ProfileDetails from '../ProfileDetails'

const cx = classNames.bind(styles)

function ProfileTutor() {
  const [searchedText, setSearchedText] = useState('')

  return (
    <div className={cx('form-papper')}>
      <div className={cx('list')}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%'
          }}
        >
          <div className={cx('search-wrapper')}>
            <label htmlFor='search' className={cx('icon')}>
              <IconUserSearch />
            </label>
            <input
              className={cx('search')}
              placeholder='Tìm kiếm thông tin gia sư  '
              // eslint-disable-next-line react/no-unknown-property
              onSearch={(value) => {
                setSearchedText(value)
              }}
              onChange={(e) => {
                setSearchedText(e.target.value)
              }}
            />
          </div>
        </div>
        <Table
          className={cx('table')}
          columns={[
            {
              title: 'Gia sư',
              dataIndex: 'nameStudent',
              key: 'nameStudent',
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return String(record.nameStudent).toLowerCase().includes(value.toLowerCase())
              }
            }
          ]}
          dataSource={listTutor}
        ></Table>
      </div>
      <div className={cx('profile')}>
        <ProfileDetails />
      </div>
    </div>
  )
}

export default ProfileTutor
