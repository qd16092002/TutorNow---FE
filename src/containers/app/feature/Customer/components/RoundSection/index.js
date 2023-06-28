import styles from './RoundSection.module.sass'
import classNames from 'classnames/bind'
import people from '@src/assets/images/people.png'
import photo from '@src/assets/images/photo.png'
import lock from '@src/assets/images/lock.png'
import connect from '@src/assets/images/connect.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import useMediaQuery from '@src/hooks/useMediaQuery'
import { ShortConnectLine } from '@src/assets/svgs'

const cx = classNames.bind(styles)

function RoundSection() {
  const { ref: heading, inView: headInView } = useInView()
  const { ref: content, inView: contentInView } = useInView()

  const { t } = useTranslation()
  const maxSm = useMediaQuery('(max-width: 992px)')

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  }
  return (
    <div id='round-section' className={cx(maxSm ? 'round-wrapper-mobile' : 'round-wrapper')}>
      <motion.div
        ref={heading}
        initial='hidden'
        animate={headInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={cx('heading')}
      >
        <h3>{t('content3.header1')}</h3>
        <h3 className={cx('color')}>{t('content3.header2')}</h3>
        <p>
          {t('round.description.top')}
          <br />
          {t('round.description.bottom')}
        </p>
      </motion.div>
      <motion.div
        ref={content}
        variants={variants}
        initial='hidden'
        animate={contentInView ? 'visible' : 'hidden'}
        transition={{ duration: 1, delay: 0.5 }}
        className={cx('main')}
      >
        <div className={cx('item')}>
          <div className={cx('image')}>
            <img src={people} alt='public' />
          </div>
          <div className={cx('number')}>1</div>
          <span className={cx('text')}>Public test</span>
        </div>
        {maxSm ? (
          <div className={cx('connect-wrapper-mobile')}>
            <ShortConnectLine />
          </div>
        ) : (
          <div className={cx('connect-wrapper')}>
            <img src={connect} alt='connect' />
          </div>
        )}
        <div className={cx('item')}>
          <div className={cx('image')}>
            <img src={lock} alt='private' />
          </div>
          <div className={cx('number')}>2</div>
          <span className={cx('text')}>Private test</span>
        </div>
        {maxSm ? (
          <div className={cx('connect-wrapper-mobile')}>
            <ShortConnectLine />
          </div>
        ) : (
          <div className={cx('connect-wrapper')}>
            <img src={connect} alt='connect' />
          </div>
        )}
        <div className={cx('item')}>
          <div className={cx('image')}>
            <img src={photo} alt='market' />
          </div>
          <div className={cx('number')}>3</div>
          <span className={cx('text')}>Market test</span>
        </div>
      </motion.div>
    </div>
  )
}

export default RoundSection
