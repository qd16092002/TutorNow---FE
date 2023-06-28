import classNames from 'classnames/bind'
import styles from './Status.module.sass'

const cx = classNames.bind(styles)

function Status({ active = false, children }) {
  return <div className={cx(active ? 'active' : 'inactive')}>{children}</div>
}

export default Status
