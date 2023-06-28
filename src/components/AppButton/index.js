import classNames from 'classnames/bind'
import styles from './Button.module.sass'
import { forwardRef } from 'react'
import ReactLoading from 'react-loading'
const cx = classNames.bind(styles)

const AppButton = forwardRef(function AppButton(
  { style = null, onClick = () => {}, children, isLoading = false, showIcon = false, Icon = null, ...props },
  ref
) {
  return (
    <button onClick={onClick} disabled={isLoading} ref={ref} style={style} className={cx('button')} {...props}>
      {showIcon && <div>{Icon}</div>}
      {isLoading ? <ReactLoading type='bubbles' height={32} width={32} /> : children}
    </button>
  )
})

export default AppButton
