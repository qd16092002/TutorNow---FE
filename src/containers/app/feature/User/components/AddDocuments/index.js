import classNames from 'classnames/bind'
import styles from './AddDocuments.module.sass'
import { FormProvider, useForm } from 'react-hook-form'
import { IconAddDocuments } from '@src/assets/svgs'
import AppFileInput from '@src/components/AppFileInput/AppFileInput'
// import { useRef } from 'react'
import AppButton from '@src/components/AppButton'

const cx = classNames.bind(styles)

function AddDocuments() {
  const methods = useForm()
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm()
  // const formInput = useRef()
  // const [updateUser, { isLoading: isUpdating }] = useChangeUserInformationMutation()
  const onSubmit = async () => {}
  return (
    <div className={cx('form-wallpaper')}>
      <FormProvider {...methods}>
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
            <AppButton type='submit' className={cx('button')}>
              Hoàn tất
            </AppButton>
            {/* <button
              onClick={() => {
                formInput.current.click()
              }}
              type='submit'
            >
              Hoàn tất
            </button> */}
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
              <div
                {...register('file')}
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
