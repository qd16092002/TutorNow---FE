import classNames from 'classnames/bind'
import React, { useState } from 'react'

import styles from './TableCalendar.module.sass'
import { Input, Table } from 'antd'

const cx = classNames.bind(styles)
function TableCalendar() {
  const [searchedText, setSearchedText] = useState('')

  return (
    <div>
      <div className={cx('information')}>
        <Input.Search
          placeholder='Tìm kiếm thông tin giảng viên, học sinh...  '
          onSearch={(value) => {
            setSearchedText(value)
          }}
          onChange={(e) => {
            setSearchedText(e.target.value)
          }}
        />
        <Table
          className={cx('table')}
          columns={[
            {
              title: 'Tên sách',
              dataIndex: 'nameBook',
              key: 'nameBook',
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.nameBook).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.nameAuthor).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.publish).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.year).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.category).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.type).toLowerCase().includes(value.toLowerCase()) ||
                  String(record.number).toLowerCase().includes(value.toLowerCase())
                )
              }
            },
            {
              title: 'Tên tác giả',
              dataIndex: 'nameAuthor',
              key: 'nameAuthor'
            },
            {
              title: 'Nhà xuất bản',
              dataIndex: 'publish',
              key: 'publish'
            },
            {
              title: 'Năm xuất bản',
              dataIndex: 'year',
              key: 'year'
            },
            {
              title: 'Thể loại',
              dataIndex: 'category',
              key: 'category'
            },
            {
              title: 'Loại sách',
              dataIndex: 'type',
              key: 'type'
            },
            {
              title: 'Số lượng',
              dataIndex: 'number',
              key: 'number'
            }
          ]}
          dataSource={[
            {
              key: '1',
              nameBook: 'Tôi là Malala',
              nameAuthor: 'Malala Yousafzai',
              publish: 'Nhà xuất bản Trẻ',
              year: '2014',
              category: 'Tự truyện',
              type: 'Sách thường',
              number: '2'
            },
            {
              key: '2',
              nameBook: 'Mắt biếc',
              nameAuthor: 'Nguyễn Nhật Ánh',
              publish: 'Nhà xuất bản Trẻ',
              year: '2000',
              category: 'Truyện ngắn',
              type: 'Sách thường',
              number: '5'
            },
            {
              key: '3',
              nameBook: 'Bí mật của may mắn',
              nameAuthor: 'Rhonda Byrne',
              publish: 'Nhà xuất bản Kim Đồng',
              year: '2012',
              category: 'Đời sống',
              type: 'Sách thường',
              number: '1'
            },
            {
              key: '4',
              nameBook: 'Đắc nhân tâm',
              nameAuthor: 'Dale Carnegie',
              publish: 'Nhà xuất bản Thế giới',
              year: '1936',
              category: 'Đời sống',
              type: 'Sách thường',
              number: '8'
            },
            {
              key: '5',
              nameBook: 'Nhà giả kim',
              nameAuthor: 'Paulo Coelho',
              publish: 'Nhà xuất bản Văn Học',
              year: '1988',
              category: 'Tiểu thuyết',
              type: 'Sách thường',
              number: '3'
            },
            {
              key: '6',
              nameBook: 'Hai số phận',
              nameAuthor: 'Charles Dickens',
              publish: 'Nhà xuất bản Hội Nhà văn',
              year: '1861',
              category: 'Tiểu thuyết',
              type: 'Sách quý giá',
              number: '1'
            },
            {
              key: '7',
              nameBook: 'Tôi đã mất gì và tôi đã tìm thấy gì',
              nameAuthor: 'Elsa Triolet',
              publish: 'Nhà xuất bản Hội Nhà văn',
              year: '1979',
              category: 'Tự truyện',
              type: 'Sách thường',
              number: '2'
            },
            {
              key: '8',
              nameBook: 'Con chim xanh biếc bay về',
              nameAuthor: 'Nam Cao',
              publish: 'Nhà xuất bản Kim Đồng',
              year: '1946',
              category: 'Truyện ngắn',
              type: 'Sách quý giá',
              number: '1'
            },
            {
              key: '9',
              nameBook: 'Phật giáo đời sống',
              nameAuthor: 'Thích Nhất Hạnh',
              publish: 'Nhà xuất bản Phật Học',
              year: '1995',
              category: 'Đời sống',
              type: 'Sách quý giá',
              number: '0'
            },
            {
              key: '10',
              nameBook: 'Những kẻ mộng du',
              nameAuthor: 'Haruki Murakami',
              publish: 'Nhà xuất bản Văn Học',
              year: '1994',
              category: 'Tiểu thuyết',
              type: 'Sách thường',
              number: '3'
            },
            {
              key: '11',
              nameBook: 'Sự im lặng của bầy cừu',
              nameAuthor: 'Thomas Harris',
              publish: 'Nhà xuất bản Văn Học',
              year: '1988',
              category: 'Tiểu thuyết',
              type: 'Sách thường',
              number: '2'
            },
            {
              key: '12',
              nameBook: 'Superintelligence: Paths, Dangers, Strategies',
              nameAuthor: 'Nick Bostrom',
              publish: 'Nhà xuất bản Oxford University Press',
              year: '2014',
              category: 'Khoa học',
              type: 'Sách thường',
              number: '1'
            },
            {
              key: '13',
              nameBook: 'Human Compatible: Artificial Intelligence and the Problem of Control',
              nameAuthor: 'Stuart Russell',
              publish: 'Nhà xuất bản Viking',
              year: '2019',
              category: 'Khoa học',
              type: 'Sách quý giá',
              number: '2'
            },
            {
              key: '14',
              nameBook: 'Deep Learning',
              nameAuthor: 'Ian Goodfellow, Yoshua Bengio và Aaron Courville',
              publish: 'Nhà xuất bản MIT Press',
              year: '2016',
              category: 'Khoa học',
              type: 'Sách thường',
              number: '3'
            }
          ]}
        ></Table>
      </div>
    </div>
  )
}

export default TableCalendar