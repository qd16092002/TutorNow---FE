import classNames from 'classnames/bind'
import styles from './AddDocuments.module.sass'
import { FormProvider, useForm } from 'react-hook-form'
import { IconAddDocuments } from '@src/assets/svgs'
import AppFileInput from '@src/components/AppFileInput/AppFileInput'

const cx = classNames.bind(styles)

function AddDocuments() {
  const methods = useForm()

  return (
    <div className={cx('form-wallpaper')}>
      <FormProvider {...methods}>
        <form className={cx('adddocuments')}>
          <div className={cx('header_documents')}>
            <div className={cx('title_add_documents')}>
              <IconAddDocuments />
              <div
                style={{
                  marginBottom: '5px'
                }}
              >
                Thêm tài liệu
              </div>
            </div>
            <button>Hoàn tất</button>
          </div>
          <div className={cx('content')}>
            <div>
              <select className={cx('input')} placeholder='Môn'>
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
              <select className={cx('input')} placeholder='Khối'>
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
              <select className={cx('input')} placeholder='Mức độ'>
                <option value='Dễ'>Dễ </option>
                <option value='Trung bình'>Trung bình </option>
                <option value='Khó'>Khó </option>
              </select>
            </div>
            <div>
              <div
                className={cx('input')}
                style={{
                  marginTop: '-3px'
                }}
              >
                <AppFileInput
                  name='attachmentFile'
                  accept='application/pdf,application/msword,
                                          application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ></AppFileInput>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default AddDocuments
