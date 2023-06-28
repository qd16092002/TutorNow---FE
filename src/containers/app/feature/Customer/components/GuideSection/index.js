import classNames from 'classnames/bind'
import styles from './GuideSection.module.sass'
import {
  Connect2Mobile,
  ConnectLine1Mobile,
  ConnectLine1,
  ConnectLine2,
  ConnectLine3,
  DataIcon,
  Polygon,
  SaveIcon,
  ShareIcon,
  StartIcon,
  ConnectLine2Mobile,
  ConnectLine3Mobile
} from '@src/assets/svgs'
import connect1 from '@src/assets/images/connect-1.png'
import connect2 from '@src/assets/images/connect-2.png'
import CollapseList from '../CollapseList'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import useMediaQuery from '@src/hooks/useMediaQuery'
// import { Row, Col } from 'antd'

const cx = classNames.bind(styles)

function GuideSection() {
  const { ref: heading, inView: headInView } = useInView()
  const { ref: getStarted, inView: getStartedInView } = useInView()
  const { ref: guide } = useInView()
  const { ref: line1, inView: line1InView } = useInView()
  const { ref: line2, inView: line2InView } = useInView()
  const { ref: line3, inView: line3InView } = useInView()
  const { ref: num1 } = useInView()
  const { ref: num2 } = useInView()
  const { ref: content1 } = useInView()
  const { ref: content2, inView: content2InView } = useInView()
  const { ref: content3 } = useInView()

  const { t } = useTranslation()
  const maxSm = useMediaQuery('(max-width: 992px)')

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  }

  const fromLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 }
  }

  const fromRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 }
  }

  const opacity = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  const stepOne = {
    header: t('guide.content1.header'),
    list: [
      {
        title: t('guide.content1.list.title1'),
        detail: t('guide.content1.list.detail1')
      },
      {
        title: t('guide.content1.list.title2'),
        detail: t('guide.content1.list.detail2')
      },
      {
        title: t('guide.content1.list.title3'),
        detail: t('guide.content1.list.detail3')
      },
      {
        title: t('guide.content1.list.title4'),
        detail: t('guide.content1.list.detail4')
      }
    ]
  }

  const stepTwo = {
    header: t('guide.content2.header'),
    list: [
      {
        title: t('guide.content2.list.title1'),
        detail: t('guide.content2.list.detail1')
      },
      {
        title: t('guide.content2.list.title2'),
        detail: t('guide.content2.list.detail2')
      },
      {
        title: t('guide.content2.list.title3'),
        detail: t('guide.content2.list.detail3')
      },
      {
        title: t('guide.content2.list.title4'),
        detail: t('guide.content2.list.detail4')
      }
    ]
  }

  const stepThree = {
    header: t('guide.content3.header'),
    list: [
      {
        title: t('guide.content3.list.title1'),
        detail: t('guide.content3.list.detail1')
      },
      {
        title: t('guide.content3.list.title2'),
        detail: t('guide.content3.list.detail2')
      },
      {
        title: t('guide.content3.list.title3'),
        detail: t('guide.content3.list.detail3')
      }
    ]
  }

  return (
    <div id='guide-section' className={cx(maxSm ? 'guide-wrapper-mobile' : 'guide-wrapper')}>
      <motion.div
        ref={heading}
        initial='hidden'
        animate={headInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={cx('heading')}
      >
        <div id='started' className={cx('big-head')}>
          <div>{t('content2.header1')}</div>
          <div className={cx('color')}>{t('content2.header2')}</div>
        </div>
        <p>{t('content2.header3')}</p>
      </motion.div>
      <div className={cx('main')}>
        <motion.button
          ref={getStarted}
          initial='hidden'
          animate={getStartedInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.25, delay: 0.1 }}
          className={cx('start-btn')}
        >
          <div className={cx('icon')}>
            <StartIcon />
          </div>
          <div>{t('button.gettingstarted')}</div>

          <img className={cx('connect-1')} src={connect1} alt='connect' />
        </motion.button>
        <motion.div
          ref={guide}
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={cx('info')}
        >
          <div className={cx('item')}>
            <div className={cx('head')}>
              <div className={cx('dot')}></div>
              <div className={cx('text')}>{t('guide.start.head1')}:</div>
            </div>
            <p className={cx('description')}>{t('guide.start.description1')}</p>
          </div>
          <div className={cx('item')}>
            <div className={cx('head')}>
              <div className={cx('dot')}></div>
              <div className={cx('text')}>{t('guide.start.head2')}:</div>
            </div>
            <p className={cx('description')}>{t('guide.start.description2')}</p>
          </div>
          <motion.div
            ref={line1}
            initial='hidden'
            animate={line1InView ? 'visible' : 'hidden'}
            variants={opacity}
            transition={{ duration: 0.2, delay: 0.05 }}
            className={cx('connect-2')}
          >
            {maxSm ? <Connect2Mobile /> : <img src={connect2} alt='connect2' />}
          </motion.div>
        </motion.div>
        <div className={cx('step-1')}>
          <motion.div
            ref={content1}
            initial='hidden'
            animate={line1InView ? 'visible' : 'hidden'}
            variants={fromLeft}
            transition={{ duration: 0.3, delay: 0.25 }}
            className={cx('list-info')}
          >
            <CollapseList
              data={stepOne}
              Icon={<DataIcon />}
              underLineColor='#84E4A4'
              detailBorder='#4F8963'
              detailBackground='#0A2C15'
              iconBorder='#84E4A4'
            />
          </motion.div>
          <div className={cx('guide-line')}>
            <motion.div
              ref={num1}
              initial='hidden'
              animate='visible'
              variants={opacity}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={cx('number')}
            >
              01
              {!maxSm ? (
                <div className={cx('top-polygon')}>
                  <Polygon />
                </div>
              ) : null}
              <motion.div
                ref={line2}
                initial='hidden'
                animate='visible'
                variants={opacity}
                transition={{ duration: 0.2, delay: 0.05 }}
                className={cx('connect-line-1')}
              >
                {maxSm ? <ConnectLine1Mobile /> : <ConnectLine1 />}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className={cx('step-2')}>
          <div className={cx('guide-line')}>
            <motion.div
              ref={num2}
              initial='hidden'
              animate='visible'
              variants={opacity}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={cx('number')}
            >
              02
              {!maxSm ? (
                <div className={cx('top-polygon')}>
                  <Polygon />
                </div>
              ) : null}
              <motion.div
                ref={line2}
                initial='hidden'
                animate={line2InView ? 'visible' : 'hidden'}
                variants={opacity}
                transition={{ duration: 0.5, delay: 0.25 }}
                className={cx('connect-line-1')}
              >
                {maxSm ? <ConnectLine2Mobile /> : <ConnectLine2 />}
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            ref={content2}
            initial='hidden'
            animate={content2InView ? 'visible' : 'hidden'}
            variants={fromRight}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={cx('list-info')}
          >
            <CollapseList
              data={stepTwo}
              Icon={<ShareIcon />}
              underLineColor='#FED834'
              detailBorder='#7B6A22'
              detailBackground='#423D29'
              iconBorder='#FED834'
            />
          </motion.div>
        </div>
        <div className={cx('step-3')}>
          <motion.div
            ref={content3}
            initial='hidden'
            animate={line3InView ? 'visible' : 'hidden'}
            variants={fromLeft}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={cx('list')}
          >
            <CollapseList
              data={stepThree}
              Icon={<SaveIcon />}
              underLineColor='#36A9E1'
              detailBackground='#0B364B'
              detailBorder='#36A9E1'
              iconBorder='#36A9E1'
            />
          </motion.div>
          <div className={cx('guide-line')}>
            <div className={cx('number')}>
              03
              {!maxSm ? (
                <div className={cx('top-polygon')}>
                  <Polygon />
                </div>
              ) : null}
              <motion.div
                ref={line3}
                initial='hidden'
                animate={line3InView ? 'visible' : 'hidden'}
                variants={opacity}
                transition={{ duration: 0.2, delay: 0.05 }}
                className={cx('connect-line-1')}
              >
                {maxSm ? <ConnectLine3Mobile /> : <ConnectLine3 />}
              </motion.div>
            </div>
          </div>
        </div>
        <div className={cx('finish')}>
          {t('finished.finished')}
          {!maxSm ? (
            <div className={cx('top-polygon')}>
              <Polygon />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default GuideSection
