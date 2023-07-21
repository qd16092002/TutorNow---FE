import classNames from 'classnames/bind'
import styles from './AddDocuments.module.sass'
import { useForm } from 'react-hook-form'
import { IconAddDocuments } from '@src/assets/svgs'
import { Fragment, useRef } from 'react'
import { useCreatDocumentsMutation, useLazyGetDocumentsQuery } from '../../userService'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setDocuments } from '../../userSlice'

const cx = classNames.bind(styles)

function AddDocuments({ onClose }) {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const formInput = useRef()
  const [creatDocuments, { isLoading: isUpdating }] = useCreatDocumentsMutation()
  const [getDocuments] = useLazyGetDocumentsQuery({})
  const onSubmit = async (data, e) => {
    const creatdocuments = await creatDocuments(data)
    e.preventDefault()

    if (!creatdocuments?.error) {
      toast.success('Cập nhật tài liệu thành công')
      const response = await getDocuments({}, false)
      onClose()
      if (!response?.error) {
        console.log('response::  ', response)
        dispatch(setDocuments(response.data[0]))
      }
    } else {
      toast.error('Vui lòng điền đầy đủ thông tin')
    }
  }

  return (
    <Fragment>
      <div className={cx('form-wallpaper')}>
        <form onSubmit={handleSubmit(onSubmit)} className={cx('adddocuments')}>
          <div className={cx('header_documents')}>
            <div className={cx('title_add_documents')}>
              <IconAddDocuments />
              <div
                style={{
                  marginTop: '-3px'
                }}
              >
                Thêm tài liệu
              </div>
            </div>
            <button
              onClick={() => {
                formInput.current.click()
              }}
              type='submit'
              disabled={isUpdating}
              className={cx('button')}
            >
              Hoàn tất
            </button>
          </div>
          <div className={cx('content')}>
            <div>
              <select {...register('subject')} className={cx('input')} placeholder='Môn'>
                <option value='Toán'>Toán</option>
                <option value='Vật lí'>Vật lí</option>
                <option value='Hóa học'>Hóa học</option>
                <option value='Sinh học'>Sinh học</option>
                <option value='Tin học'>Tin học</option>
                <option value='Lịch sử'>Lịch sử</option>
                <option value='Ngữ văn'>Ngữ văn</option>
                <option value='Địa lí'>Địa lí</option>
              </select>
            </div>
            <div>
              <select {...register('grade')} className={cx('input')} placeholder='Khối'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>
            </div>
            <div>
              <select {...register('lever')} className={cx('input')} placeholder='Mức độ'>
                <option value='easy'>Dễ </option>
                <option value='middle'>Trung bình </option>
                <option value='hard'>Khó </option>
              </select>
            </div>
            <div>
              <input {...register('file')} className={cx('input')} placeholder='Link tài liệu'></input>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default AddDocuments
