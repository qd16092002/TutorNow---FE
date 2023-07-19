/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './ListDocuments.module.sass'
import { DocumentsBox, IconUserSearch } from '@src/assets/svgs'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLazyGetDocumentsQuery } from '../../userService'

const cx = classNames.bind(styles)

function ListDocuments() {
  const [searchedText, setSearchedText] = useState('')
  const [getDocuments, { data: documentsif }] = useLazyGetDocumentsQuery({})
  useEffect(() => {
    getDocuments({}, false)
  }, [getDocuments])
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
              key: 'id',
              render: (text, record, rowIndex) => rowIndex + 1,
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.id).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.subject).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.grade).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.lever).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.note).toLowerCase().includes(value.toLowerCase())
                )
              }
            },
            {
              title: 'Môn',
              dataIndex: 'subject',
              key: 'subject'
            },
            {
              title: 'Khối',
              dataIndex: 'grade',
              key: 'grade'
            },
            {
              title: 'Mức độ',
              dataIndex: 'lever',
              key: 'lever',
              render: (record) => {
                return (
                  <div>
                    {record == 'hard' && <div> Khó</div>}
                    {record == 'easy' && <div> Dễ</div>}
                    {record == 'middle' && <div>Bình Thường</div>}
                  </div>
                )
              }
            },
            {
              title: 'Ghi chú',
              dataIndex: 'note',
              key: 'note',
              render: () => {
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
          dataSource={documentsif}
        ></Table>
      </div>
    </div>
  )
}

export default ListDocuments
