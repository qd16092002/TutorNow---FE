import classNames from 'classnames/bind'
import React, { useEffect, useRef, useState } from 'react'
import styles from './TableCalendar.module.sass'
import { Table } from 'antd'
import { IconUserSearch } from '@src/assets/svgs'
import AppModal from '@src/components/AppModal/AppModal'
import ClassDetails from '../ClassDetails'
import AddCalendar from '../AddCalendar'
import { useDeleteCalendarsbyIdMutation, useLazyGetCalendarQuery } from '../../userService'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { setCalendar } from '../../userSlice'

const cx = classNames.bind(styles)
function TableCalendar() {
  const userInfo = useSelector((state) => state.auth.user)
  const [searchedText, setSearchedText] = useState('')
  const [saveUserId, setSaveUserId] = useState(null)
  const closeRef = useRef()
  const [getCalendar, { data: calendarif }] = useLazyGetCalendarQuery({})
  const [deleteCalendar] = useDeleteCalendarsbyIdMutation()

  const dispatch = useDispatch()
  useEffect(() => {
    getCalendar({}, false)
      .then((response) => {
        // set state
        console.log('response: ', response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [getCalendar])
  const handleDelete = async (id) => {
    await deleteCalendar(id)

    if (!deleteCalendar?.error) {
      toast.success('Xóa lớp thành công')
      const response = await getCalendar({}, false)
      onClose()
      if (!response?.error) {
        dispatch(setCalendar(response.data[0]))
      }
    } else {
      toast.error('Xảy ra lỗi vui lòng thử lại sau!')
    }
  }
  const onClose = () => {
    closeRef.current.click()
  }
  return (
    <div className={cx('wall-paper')}>
      <div className={cx('information')}>
        {userInfo?.role === 'ADMIN' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%'
            }}
          >
            <AppModal
              triggerBtn={<div className={cx('addnewcalendar')}>Thêm khóa học</div>}
              contentStyle={{
                width: '720px',
                height: '370px',
                left: '60vw',
                top: '45vh',
                backgroundColor: 'white',
                boxShadow: '4px 4px 10px 0px #00000040'
              }}
              ref={closeRef}
            >
              <AddCalendar onClose={onClose} />
            </AppModal>
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
        )}
        {userInfo?.role === 'ADMIN' && (
          <Table
            className={cx('table')}
            columns={[
              {
                title: 'STT',
                dataIndex: 'id',
                render: (text, record, rowIndex) => rowIndex + 1,
                filteredValue: [searchedText],
                onFilter: (value, record) => {
                  return (
                    String(record.id).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.nameStudent).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.codeClass).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.subject).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.nameTutor).toLowerCase().includes(value.toLowerCase()) ||
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
                title: 'Tên gia sư',
                dataIndex: 'nameTutor',
                key: 'nameTutor'
              },
              {
                title: 'Số điện thoại',
                dataIndex: 'phonenuberstudent',
                key: 'phonenuberstudent'
              },
              {
                title: 'Ghi chú',
                dataIndex: 'note',
                key: 'note',
                render: () => {
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
                      {saveUserId && <ClassDetails id={saveUserId} />}
                    </AppModal>
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
            dataSource={calendarif}
            onRow={(record) => ({
              onClick: () => setSaveUserId(record?._id)
            })}
          ></Table>
        )}
        {userInfo?.role != 'ADMIN' && (
          <Table
            className={cx('table')}
            columns={[
              {
                title: 'STT',
                dataIndex: 'id',
                render: (text, record, rowIndex) => rowIndex + 1,
                filteredValue: [searchedText],
                onFilter: (value, record) => {
                  return (
                    String(record.id).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.nameStudent).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.codeClass).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.subject).toLowerCase().includes(value.toLowerCase()) ||
                    String(record.nameTutor).toLowerCase().includes(value.toLowerCase()) ||
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
                title: 'Tên gia sư',
                dataIndex: 'nameTutor',
                key: 'nameTutor'
              },
              {
                title: 'Số điện thoại',
                dataIndex: 'phonenuberstudent',
                key: 'phonenuberstudent'
              },
              {
                title: 'Ghi chú',
                dataIndex: 'note',
                key: 'note',
                render: () => {
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
                      {saveUserId && <ClassDetails id={saveUserId} />}
                    </AppModal>
                  )
                }
              }
            ]}
            dataSource={calendarif}
            onRow={(record) => ({
              onClick: () => setSaveUserId(record?._id)
            })}
          ></Table>
        )}
      </div>
    </div>
  )
}

export default TableCalendar
