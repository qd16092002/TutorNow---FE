/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames/bind'
import styles from './ProfileStudent.module.sass'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { IconUserSearch } from '@src/assets/svgs'
import ProfileDetails from '../ProfileDetails'
import { useLazyGetstudentQuery } from '../../userService'

const cx = classNames.bind(styles)

function ProfileStudent() {
  const [searchedText, setSearchedText] = useState('')
  const [getstudent, { data: studentif }] = useLazyGetstudentQuery({})
  useEffect(() => {
    getstudent({}, false)
  }, [getstudent])
  const [profileid, setprofileId] = useState()
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
              dataIndex: 'fullName',
              key: 'fullName',
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return String(record.fullName).toLowerCase().includes(value.toLowerCase())
              }
            }
          ]}
          onRow={(record) => ({
            onClick: () => setprofileId(record?._id)
          })}
          dataSource={studentif}
        ></Table>
      </div>
      {profileid && (
        <div className={cx('profile')}>
          <ProfileDetails id={profileid} />
        </div>
      )}
    </div>
  )
}

export default ProfileStudent
