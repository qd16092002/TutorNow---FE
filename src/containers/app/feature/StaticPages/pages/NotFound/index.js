import notfound_bg from '@src/assets/images/notfound_bg.png'
import classNames from 'classnames/bind'
import styles from './NotFound.module.sass'
import useMediaQuery from '@src/hooks/useMediaQuery'

const cx = classNames.bind(styles)

function NotFound() {
  const maxSmSize = useMediaQuery('(max-width: 768px)')

  return (
    <div className={cx('not-found-wrapper')}>
      <img className={maxSmSize ? cx('mobile') : cx('tablet')} src={notfound_bg} alt='not-found' />
    </div>
  )
}

export default NotFound
