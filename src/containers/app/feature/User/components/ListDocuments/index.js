/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './ListDocuments.module.sass'
import { DocumentsBox, IconUserSearch } from '@src/assets/svgs'
import { Table } from 'antd'
import { listDocuments } from '@src/app-configs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                  <Link
                    target='_blank'
                    to='https://drive.google.com/file/d/1sT_Iwb8THGHOxUibS1FNV-uGZzl8UVYr/view?usp=sharing'
                  >
                    <div className={cx('xemchitiet')}>Xem chi tiết</div>
                  </Link>
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
