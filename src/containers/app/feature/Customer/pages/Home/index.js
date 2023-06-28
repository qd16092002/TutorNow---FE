import classNames from 'classnames/bind'
import styles from './Home.module.sass'
import IntroduceSection from '../../components/IntroductSection'
import RoundSection from '../../components/RoundSection'
import GuideSection from '../../components/GuideSection'
import useMediaQuery from '@src/hooks/useMediaQuery'
import { Container } from '@mui/material'

const cx = classNames.bind(styles)

function Home() {
  const maxSm = useMediaQuery('(max-width: 992px)')

  return (
    <div className={cx('home-wrapper')}>
      <Container>
        <div className={cx('home-child')}>
          <IntroduceSection />
          <RoundSection />
          <GuideSection />{' '}
          {maxSm ? (
            <>
              <div className={cx('gradient-1-mobile')}></div>
              <div className={cx('gradient-2-mobile')}></div>
              <div className={cx('gradient-4-mobile')}></div>
              <div className={cx('gradient-5-mobile')}></div>
              <div className={cx('ellipse-23-mobile')}></div>
              <div className={cx('ellipse-89-mobile')}></div>
              <div className={cx('ellipse-91-mobile')}></div>{' '}
            </>
          ) : (
            <>
              <div className={cx('gradient-1')}></div>
              <div className={cx('gradient-2')}></div>
              <div className={cx('gradient-4')}></div>
              <div className={cx('gradient-5')}></div>
              <div className={cx('ellipse-23')}></div>
              <div className={cx('ellipse-89')}></div>
              <div className={cx('ellipse-91')}></div>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Home
