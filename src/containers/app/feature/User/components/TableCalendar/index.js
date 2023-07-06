import classNames from 'classnames/bind'
import React, { useState } from 'react'

import styles from './TableCalendar.module.sass'
import { Table } from 'antd'
import { IconUserSearch } from '@src/assets/svgs'
import AppModal from '@src/components/AppModal/AppModal'
import ClassDetails from '../ClassDetails'
import { listUser } from '@src/app-configs'

const cx = classNames.bind(styles)
function TableCalendar() {
  const [searchedText, setSearchedText] = useState('')
  const [saveUserId, setSaveUserId] = useState(null)

  return (
    <div className={cx('wall-paper')}>
      <div className={cx('information')}>
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
              placeholder='Tìm kiếm thông tin giảng viên, học sinh...  '
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
              title: 'STT',
              dataIndex: 'id',
              key: 'id',
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.id).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.nameStudent).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.codeClass).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.subject).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.note).toLowerCase().includes(value.toLowerCase())
                )
              }
            },
            {
              title: 'Tên Học sinh',
              dataIndex: 'nameStudent',
              key: 'nameStudent'
            },
            {
              title: 'Mã số lớp',
              dataIndex: 'codeClass',
              key: 'codeClass'
            },
            {
              title: 'Môn học',
              dataIndex: 'subject',
              key: 'subject'
            },
            {
              title: 'Ghi chú',
              dataIndex: 'note',
              key: 'note',
              render: (record) => {
                console.log('record ::', record)
                return (
                  <AppModal
                    triggerBtn={<div className={cx('xemchitiet')}>Xem chi tiết</div>}
                    contentStyle={{
                      width: '50vw',
                      height: '50vh',
                      backgroundColor: 'white',
                      boxShadow: '4px 4px 10px 0px #00000040'
                    }}
                    onClick={() => {
                      setSaveUserId(record?._id)
                    }}
                  >
                    <ClassDetails />
                  </AppModal>
                )
              }
            }
          ]}
          dataSource={listUser}
        ></Table>
        {saveUserId && <ClassDetails />}
      </div>
    </div>
  )
}

export default TableCalendar
