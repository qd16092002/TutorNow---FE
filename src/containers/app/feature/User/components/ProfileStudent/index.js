/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileStudent.module.sass'
import { listUser } from '@src/app-configs'
import { Table } from 'antd'
import { useState } from 'react'
import { IconUserSearch } from '@src/assets/svgs'
import ProfileDetails from '../ProfileDetails'

const cx = classNames.bind(styles)

function ProfileStudent() {
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
              placeholder='Tìm kiếm thông tin học sinh...  '
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
              title: 'Học sinh',
              dataIndex: 'nameStudent',
              key: 'nameStudent',
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return String(record.nameStudent).toLowerCase().includes(value.toLowerCase())
              }
            }
          ]}
          dataSource={listUser}
        ></Table>
      </div>
      <div className={cx('profile')}>
        <ProfileDetails />
      </div>
    </div>
  )
}

export default ProfileStudent
