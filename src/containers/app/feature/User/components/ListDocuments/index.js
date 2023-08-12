/* eslint-disable react/jsx-no-undef */
import classNames from 'classnames/bind'
import styles from './ListDocuments.module.sass'
import { DocumentsBox, IconUserSearch } from '@src/assets/svgs'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDeleteDocumentsbyIdMutation, useLazyGetDocumentsQuery } from '../../userService'
import { useDispatch, useSelector } from 'react-redux'
import { setDocuments } from '../../userSlice'
import { toast } from 'react-hot-toast'

const cx = classNames.bind(styles)

function ListDocuments() {
  const [searchedText, setSearchedText] = useState('')
  const [getDocuments, { data: documentsif }] = useLazyGetDocumentsQuery({})
  const [deleteDocument] = useDeleteDocumentsbyIdMutation()
  useEffect(() => {
    getDocuments({}, false)
  }, [getDocuments])
  const userInfo = useSelector((state) => state.auth.user)
  const [saveDocumentsId, setSaveDocumentsId] = useState(null)
  console.log(saveDocumentsId)
  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    await deleteDocument(id)

    if (!deleteDocument?.error) {
      toast.success('Xóa lớp thành công')
      const response = await getDocuments({}, false)
      if (!response?.error) {
        dispatch(setDocuments(response.data[0]))
      }
    } else {
      toast.error('Xảy ra lỗi vui lòng thử lại sau!')
    }
  }

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
        {userInfo?.role === 'ADMIN' && (
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
                title: 'Link tài liệu',
                dataIndex: 'file',
                key: 'file',
                render: (record) => {
                  return (
                    <Link target='_blank' to={record}>
                      <div className={cx('xemchitiet')}>Xem chi tiết</div>
                    </Link>
                  )
                }
              },
              {
                title: 'Xóa tài liệu',
                render: (record) => {
                  return (
                    <button className={cx('delete')} onClick={() => handleDelete(record?._id)}>
                      Xóa
                    </button>
                  )
                }
              }
            ]}
            dataSource={documentsif}
            onRow={(record) => ({
              onClick: () => setSaveDocumentsId(record?._id)
            })}
          ></Table>
        )}
        {userInfo?.role != 'ADMIN' && (
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
                title: 'Link tài liệu',
                dataIndex: 'file',
                key: 'file',
                render: (record) => {
                  return (
                    <Link target='_blank' to={record}>
                      <div className={cx('xemchitiet')}>Xem chi tiết</div>
                    </Link>
                  )
                }
              }
            ]}
            dataSource={documentsif}
          ></Table>
        )}
      </div>
    </div>
  )
}

export default ListDocuments
