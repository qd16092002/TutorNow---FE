import { useFormContext } from 'react-hook-form'
import classNames from 'classnames/bind'
import styles from './AppFileInput.module.sass'
// import fileUpload from 'src/assets/images/img-upload.png'
import { Tooltip } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import { makeId } from '@src/helpers/string'
import { isExist } from '@src/helpers/check'
import { CloseBaseDoc } from '@src/assets/svgs'

const cx = classNames.bind(styles)
function AppFileInput({
  name,
  required,
  displayRequied = false,
  placeholder,
  accept = '*',
  multiple = false,
  afterSelect = () => {},
  showUploaded = true,
  triggerBtn,
  ...props
}) {
  const {
    register,
    formState: { errors },
    getValues,
    setValue
  } = useFormContext()
  const inputId = makeId(10)
  const [filesList, setFilesList] = useState([])
  console.log('register', register)
  const removeAllFiles = (e) => {
    e.stopPropagation()
    setFilesList([])
  }

  useEffect(() => {
    setValue(name, filesList)
  }, [filesList, name, setValue])

  return (
    <div className={cx('input-wrapper')}>
      <label className={cx('label', required || displayRequied ? 'required' : '')}>{props.label}</label>
      <input
        {...register(name, {
          ...(required ? { required: 'Vui lòng tải lên file' } : {}),
          ...props.validate,
          onChange: (e) => {
            const uploadedFiles = Array.from(e.target.files)
            if (uploadedFiles.length > 0) {
              afterSelect(uploadedFiles)
              if (isExist(getValues(name))) {
                setFilesList(Array.from(getValues(name) ?? []))
              }
            }
          }
        })}
        type='file'
        hidden
        id={inputId}
        accept={accept}
        multiple={multiple}
      />
      {triggerBtn ? (
        <label htmlFor={inputId} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          {triggerBtn}
        </label>
      ) : (
        <div className={cx('file-input')}>
          {showUploaded && filesList.length > 0 && (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <span className={cx('iconX')} onClick={removeAllFiles}>
              <CloseBaseDoc />
            </span>
          )}
          <label
            htmlFor={inputId}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            <Tooltip title={placeholder}>
              <span
                className={cx('placeholder', 'over-flow-1')}
                style={{
                  flex: 1
                }}
              >
                {(filesList.length === 0 || !showUploaded) &&
                  (placeholder ?? <span style={{ color: '#C3C6CC', fontWeight: '400' }}>Tải file lên...</span>)}
                {showUploaded && filesList.length > 0 && (
                  <Fragment>
                    {filesList?.reduce(
                      (result, value, index) => `${result}${index > 0 ? ', ' : ''} ${value?.name}`,
                      ''
                    )}
                  </Fragment>
                )}
              </span>
            </Tooltip>

            {showUploaded && filesList.length > 0 && (
              <span
                style={{
                  color: 'var(--primary-color)',
                  marginRight: '10px',
                  minWidth: '20px'
                }}
              >
                ({filesList.length} tệp)
              </span>
            )}
            {/* <img
              src={fileUpload}
              className={cx('file-input__img')}
              style={{
                marginRight: filesList.length > 0 ? '16px' : 0,
                marginLeft: filesList.length > 0 ? '4px' : 0
              }}
            ></img> */}
          </label>
        </div>
      )}
      {errors[name]?.type === 'required' && <div className={cx('error-message')}>{errors[name].message}</div>}
      {errors[name]?.type === 'pattern' && <div className={cx('error-message')}>{errors[name].message}</div>}
    </div>
  )
}

export default AppFileInput
