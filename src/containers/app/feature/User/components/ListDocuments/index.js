/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './ListDocuments.module.sass'
import { DocumentsBox } from '@src/assets/svgs'
import { Table } from 'antd'
import { IconUserSearch } from '@src/assets/svgs'
import AppModal from '@src/components/AppModal/AppModal'
import { listDocuments } from '@src/app-configs'
import { useState } from 'react'

const cx = classNames.bind(styles)

function ListDocuments() {
  const [searchedText, setSearchedText] = useState('')
  return (
    <div className={cx('wallpaper')}>
      <div className={cx('header')}>
        <div className={cx('title')}>
          <DocumentsBox />
          <div
            style={{
              marginTop: '-5px'
            }}
            className={cx('title_name')}
          >
            Kho tài liệu
          </div>
        </div>
      </div>
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
              placeholder='Tìm kiếm thông tin  '
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
                  String(record.namefile).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.grade).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.lever).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.note).toLowerCase().includes(value.toLowerCase())
                )
              }
            },
            {
              title: 'Tên file',
              dataIndex: 'namefile',
              key: 'namefile'
            },
            {
              title: 'Khối',
              dataIndex: 'grade',
              key: 'grade'
            },
            {
              title: 'Mức độ',
              dataIndex: 'lever',
              key: 'lever'
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
                      left: '60vw',
                      top: '55vh',
                      backgroundColor: 'white',
                      boxShadow: '4px 4px 10px 0px #00000040'
                    }}
                  >
                    Documents
                  </AppModal>
                )
              }
            }
          ]}
          dataSource={listDocuments}
        ></Table>
      </div>
    </div>
  )
}

export default ListDocuments
